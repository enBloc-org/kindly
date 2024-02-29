'use client';

import { MessageType } from '@/types/messagingTypes';
import MessageCard from './MessageCard';
import MessageForm from './MessageForm';
import { useContext, useEffect, useState, useRef } from 'react';
import useConversation from '../../app/(dashboard)/conversations/useConversation';
import { createSupabaseClient as supabase } from '@/utils/supabase/createSupabaseClient';

/**
 *
 * @param givenString expects a date format string or timestamptz type from supabase
 * @param length will be considered 'long' by default or can be set to 'short' when calling the function
 * @returns a formatted date stamp in long form by default (i.e.: 01 Januaray 2000) or short form if the second parameter is fed (i.e.: 01 01 2000)
 */
const formatDate = (givenString: string, length: string = 'long'): string => {
  try {
    const givenDate: Date = new Date(givenString);
    const monthsArray = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const currentDate = new Date();
    if (length === 'short') {
      return givenDate.getDate() === currentDate.getDate() &&
        givenDate.getUTCMonth() === currentDate.getUTCMonth() &&
        givenDate.getFullYear() === currentDate.getFullYear()
        ? 'today'
        : `${givenDate.getUTCDate()} ${givenDate.getUTCMonth() + 1} ${givenDate.getFullYear()}`;
    } else if (length !== 'long') {
      throw new Error(
        'The length parameter can only be set to "short" or the default value "long"'
      );
    }

    return `${givenDate.getUTCDate()} ${monthsArray[givenDate.getMonth()]} ${givenDate.getFullYear()}`;
  } catch (error) {
    throw error;
  }
};

const CurrentConversation: React.FC = () => {
  const { allConversations, currentConversation, setCurrentConversation } =
    useContext(useConversation);
  const [currentMessages, setCurrentMessages] = useState<MessageType[]>([]);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrentConversation && setCurrentConversation(allConversations[0]);
  }, [allConversations, setCurrentConversation]);

  useEffect(() => {
    const fetchMessagesForCurrentConversation = async () => {
      try {
        const { data: fetchedMessages } = await supabase
          .from('messages')
          .select('*')
          .eq('conversation_id', currentConversation?.conversation_id);

        setCurrentMessages(fetchedMessages ?? []);
      } catch (error) {
        console.error(`Failed to fetch messages from database: ${error}`);
        throw error;
      }
    };

    fetchMessagesForCurrentConversation();
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
    <div className='mb-10 flex h-screen flex-1 flex-col justify-end'>
      <div
        className='relative flex flex-col overflow-y-auto bg-stone-50'
        ref={chatWindowRef}
      >
        {currentMessages.map((message: MessageType, index: number) => (
          <div key={`${message.id}-${message.created_at}`}>
            {formatDate(message.created_at) !==
              formatDate(currentMessages[index - 1]?.created_at) && (
              <div
                className={`${isScrolling ? 'opacity-100' : 'opacity-0'} sticky top-4 z-10 my-[-15px] ml-[calc((100%_-_92px)/2)] h-[30px] w-[92px] rounded-xl bg-primaryGreen object-center p-1 text-center text-white transition transition-opacity ease-in-out`}
              >
                {formatDate(message.created_at, 'short')}
              </div>
            )}
            <MessageCard
              sender_id={message.sender_id}
              created_at={formatDate(message.created_at)}
              message_text={message.message_text}
              is_read={message.is_read}
              currentUser={currentConversation?.user_id}
            />
          </div>
        ))}
      </div>
      <MessageForm
        user_id={currentConversation?.user_id}
        conversation_id={currentConversation?.conversation_id}
      ></MessageForm>
    </div>
  );
};

export default CurrentConversation;
