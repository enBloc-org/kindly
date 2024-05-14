'use client';
import ConversationCard from './ConversationCard';
import { useEffect, useState } from 'react';
import { createSupabaseClient as supabase } from '@/utils/supabase/createSupabaseClient';
import { ConversationCardType } from '@/types/messagingTypes';
import { useConversationContext } from '@/context/conversationContext';
import selectItemImageAndName from '@/utils/messaging/selectItemImageAndName';

const ConversationsList: React.FC = () => {
  const {
    allConversations,
    setAllConversations,
    setCurrentConversation,
    setShowConversationsList,
    currentUserId,
  } = useConversationContext();

  const [notificationList, setNotificationList] = useState<number[]>([]);

  const updateOpenConvo = async (givenId: number) => {
    setCurrentConversation &&
      setCurrentConversation(
        allConversations?.filter(
          (conversations) => conversations.conversation_id === givenId
        )[0]
      );

    setShowConversationsList(false);
  };

  useEffect(() => {
    const channel = supabase
      .channel('realtime conversations')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'user_conversations',
          filter: `user_id=eq.${currentUserId}`,
        },
        async (payload) => {
          if (payload.new.user_id === currentUserId) {
            // update payload to include conversations.member_has_deleted to match ConversationCardType
            payload = {
              ...payload, // copy all existing properties from payload
              new: {
                ...payload.new, // copy all existing properties from payload.new
                conversations: {
                  ...payload.new.conversations, // copy all existing properties from payload.new.conversations
                  member_has_deleted: true, // set the new value
                },
              },
            };
            const newConversation = await selectItemImageAndName(
              payload.new as ConversationCardType
            );
            console.log('new conversation: ', newConversation);

            setAllConversations((prevConversations) => [
              ...prevConversations,
              newConversation,
            ]);
          }
        }
      )
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'user_conversations',
          filter: `user_id=eq.${currentUserId}`,
        },
        (payload) => {
          if (payload.new.has_unread_messages) {
            setNotificationList((prevState) => {
              if (!prevState.includes(payload.new.conversation_id)) {
                return [...prevState, payload.new.conversation_id];
              }
              return prevState;
            });
          }
          if (!payload.new.has_unread_messages) {
            setNotificationList((prevState) => {
              return prevState.filter(
                (conversationId) =>
                  conversationId !== payload.new.conversation_id
              );
            });
          }
        }
      )
      // note use a new on to listen for partner_id = currentuserid and then handle that
      .on(
        'postgres_changes',
        {
          event: 'DELETE',
          schema: 'public',
          table: 'user_conversations',
          filter: `user_id=eq.${currentUserId}`,
        },
        (payload) => {
          setAllConversations((prevConversations) => [
            ...prevConversations.filter(
              (conversation) => conversation.id !== payload.old.id
            ),
          ]);
        }
      )

      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'conversations',
          //ideally needs some sort of filter so it is called less
        },
        (payload) => {
          if (
            allConversations.some(
              (conversation) => conversation.conversation_id === payload.new.id
            )
          ) {
            const newConversations = allConversations;
            console.log('new conversation initial:  ', newConversations);
            console.log('payload:   ', payload);
            const targetConversation = newConversations.find(
              (conversation) => conversation.conversation_id === payload.new.id
            );
            console.log('target conversation: ', targetConversation);
            /// error comes from conversation traget conversation existing but having no conversations
            // why is that though are conversations created without them somewhere no join
            // seems to be going wrong where we are setting deleted to true so I guess here
            if (targetConversation && payload.new.member_has_deleted === true) {
              targetConversation.conversations.member_has_deleted = true;
            }
            setAllConversations(newConversations);
            console.log('new conversations final');
            console.log(newConversations);
            console.log('all conversations final');
            console.log(allConversations);
          }
        }
      )
      // .on(
      //   'postgres_changes',
      //   {
      //     event: 'DELETE',
      //     schema: 'public',
      //     table: 'user_conversations',
      //     filter: `partner_id=eq.${currentUserId}`,        },
      //   (payload) => {
      //     console.log("current user id  "+ currentUserId)
      //     console.log('partner deleted')
      //     // what needs to happen here is that all conversations is updated so the conversation that was deleted
      //     // has its flag set to true try spreading and creating duplicate or after filter adding it back in with
      //     //change

      //     const newConversations = allConversations;
      //     console.log("new conversation  " )
      //     console.log(newConversations)
      //     console.log("payload   " )
      //     console.log(payload)
      //     console.log("what should go in target conversation ")
      //     console.log(newConversations.find(conversation => conversation.id === payload.old.id +1 ||conversation.id === payload.old.id -1 ))
      //    const targetConversation = newConversations.find(conversation => conversation.id === payload.old.id +1 ||conversation.id === payload.old.id -1 )
      //    console.log("target conversation  " + targetConversation)
      //   //   if(targetConversation && targetConversation.)
      //   //  {targetConversation.conversations.member_has_deleted = true;}
      //   //  setAllConversations(newConversations);

      //   }
      // )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase, allConversations, setAllConversations]);
  /* we need to have current conversation update is deleted state to false when we recreate a conversation
  this does not actually need to be done by web sockets
  we also need the other user to have that state automatically updated to true when the other user deletes
  this can be done in the deletion web socket maybe or for sure in the conversation update one

  ok deletion does not work due to the only thing you have to work with from that update being a 
  user conversation id for the person who deleted it which to can only be used to filter all conversations
  by using a plus or minus one. This would cause errors though if someone started two conversations in
  a row and could end up with something in their conversations with an id one higherthat is not related.

  the direction seems likely to be and update of conversations table I think its worked out well that the 
  boolean is there we have to think how to filter when it runs though probably a some array method for 
  all conversations looking at the conversation ID
   */

  return (
    <div className='m-4'>
      {allConversations.length > 0 ? (
        allConversations.map((conversation) => (
          <div key={`${conversation.id}`}>
            <ConversationCard
              conversationId={conversation.conversation_id}
              joinedAt={conversation.joined_at}
              itemName={conversation.items.item_name}
              imageSrc={conversation.items.imageSrc}
              clickHandler={() => updateOpenConvo(conversation.conversation_id)}
              notificationList={notificationList}
            />
          </div>
        ))
      ) : (
        <p>There are no active conversations</p>
      )}
    </div>
  );
};

export default ConversationsList;
