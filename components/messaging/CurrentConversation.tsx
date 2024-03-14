'use client';

import { MessageType } from '@/types/messagingTypes';
import MessageCard from './MessageCard';
import MessageForm from './MessageForm';
import { ConversationPartner } from './ConversationPartner';
import { useEffect, useState, useRef } from 'react';
import { createSupabaseClient as supabase } from '../../utils/supabase/createSupabaseClient';
import { getProfile } from '@/utils/supabase/getProfile';
import { useConversationContext } from '../../context/conversationContext';
import {
  formatTimeMarker,
  formatDateMarker,
} from '../../utils/messaging/formatTimeStamp';

type ConversationPartnerType = {
  username: string;
  avatar: string;
};

const CurrentConversation: React.FC = () => {
  const [conversationPartner, setConversationPartner] = useState<
    ConversationPartnerType | undefined
  >();
  const { allConversations, currentConversation, setCurrentConversation } =
    useConversationContext();
  const [currentMessages, setCurrentMessages] = useState<MessageType[]>([]);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrentConversation && setCurrentConversation(allConversations[0]);
  }, [allConversations, setCurrentConversation]);

  useEffect(() => {
    const getMessagesForCurrentConversation = async () => {
      try {
        const { data: messageData } = await supabase
          .from('messages')
          .select('*')
          .eq('conversation_id', currentConversation?.conversation_id);

        setCurrentMessages(messageData ?? []);

        const conversationPartnerSet =
          messageData &&
          new Set(messageData.map((message) => message.sender_id));

        const calculateID = (isCurrentUser: boolean) => {
          return (
            conversationPartnerSet &&
            Array.from(conversationPartnerSet).find((id) =>
              isCurrentUser
                ? id === currentConversation?.user_id
                : id !== currentConversation?.user_id
            )
          );
        };

        const conversationDonorID = calculateID(true);
        const conversationPartnerID = calculateID(false);

        let partnerProfile;

        if (conversationPartnerID !== undefined) {
          partnerProfile = await getProfile(supabase, conversationPartnerID);
        }

        await getProfile(supabase, conversationDonorID);

        partnerProfile && setConversationPartner(partnerProfile.data);
      } catch (error) {
        console.error(`Failed to get messages from database: ${error}`);
        throw error;
      }
    };

    getMessagesForCurrentConversation();
  }, [currentConversation, setCurrentMessages]);

  useEffect(() => {
    const channel = supabase
      .channel('realtime messages')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
        },
        (payload) => {
          setCurrentMessages((prevMessages) => [
            ...prevMessages,
            payload.new as MessageType,
          ]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase, currentMessages, setCurrentMessages]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);

      const debounce = setTimeout(() => {
        setIsScrolling(false);
      }, 3000);

      return () => clearTimeout(debounce);
    };

    chatWindowRef.current &&
      chatWindowRef.current.addEventListener('scroll', handleScroll);

    return () => {
      chatWindowRef.current &&
        chatWindowRef.current.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolling, setIsScrolling]);

  return (
    <div className='conversation-height mb-10 flex flex-1 flex-col justify-between bg-[#fafaf9] shadow-inner'>
      {conversationPartner && (
        <ConversationPartner conversation_partner={conversationPartner} />
      )}
      <div
        className='relative flex h-full flex-col-reverse overflow-y-auto overflow-x-hidden'
        ref={chatWindowRef}
      >
        {currentMessages
          .map((message: MessageType, index: number) => (
            <div key={`${message.id}-${message.created_at}`}>
              {formatDateMarker(message.created_at) !==
                formatDateMarker(currentMessages[index - 1]?.created_at) && (
                <div
                  className={`${isScrolling ? 'opacity-100' : 'opacity-0'} sticky top-4 z-10 my-[-15px] ml-[calc((100%_-_120px)/2)] h-[30px] w-[120px] rounded-xl bg-stone-50 object-center p-1 text-center text-lg font-semibold text-slate-400 transition transition-opacity ease-in-out`}
                >
                  {formatDateMarker(message.created_at)}
                </div>
              )}
              <MessageCard
                sender_id={message.sender_id}
                created_at={formatTimeMarker(message.created_at)}
                message_text={message.message_text}
                is_read={message.is_read}
                currentUser={currentConversation?.user_id}
              />
            </div>
          ))
          .reverse()}
      </div>
      <MessageForm
        user_id={currentConversation?.user_id}
        conversation_id={currentConversation?.conversation_id}
      ></MessageForm>
    </div>
  );
};

export default CurrentConversation;
