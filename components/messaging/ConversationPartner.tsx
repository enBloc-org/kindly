import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getProfile } from '@/utils/supabase/getProfile';
import { createSupabaseClient as supabase } from '../../utils/supabase/createSupabaseClient';
import { useConversationContext } from '@/context/conversationContext';
import { MessageType } from '@/types/messagingTypes';

type ConversationPartnerProps = {
  message_data: MessageType[];
};

type ConversationPartnerType = {
  username: string;
  avatar: string;
};

export const ConversationPartner: React.FC<ConversationPartnerProps> = ({
  message_data,
}) => {
  const [conversationPartner, setConversationPartner] = useState<
    ConversationPartnerType | undefined
  >();
  const { currentConversation } = useConversationContext();

  useEffect(() => {
    const getConversationPartner = async () => {
      const conversationPartnerSet = new Set(
        message_data?.map((message: { sender_id: string }) => message.sender_id)
      );

      if (
        conversationPartnerSet?.size !== 0 &&
        conversationPartnerSet?.size !== 1
      ) {
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

        if (conversationPartnerID && conversationPartnerID !== undefined) {
          partnerProfile = await getProfile(supabase, conversationPartnerID);
        }

        conversationDonorID &&
          (await getProfile(supabase, conversationDonorID));

        partnerProfile && setConversationPartner(partnerProfile.data);
      } else {
        const { data: fetchedItemDonor } = await supabase
          .from('items')
          .select('profiles(username, avatar)')
          .eq('id', currentConversation?.item_id);

        fetchedItemDonor &&
          setConversationPartner(
            fetchedItemDonor[0].profiles as unknown as ConversationPartnerType
          );
      }
    };
    getConversationPartner();
  }, [currentConversation?.id]);

  return (
    <div className='flex flex-row items-center p-5'>
      <p data-testid='item-donor'>{conversationPartner?.username}</p>

      <Image
        className='ml-2 rounded-full'
        alt='user logo'
        width='25'
        height='35'
        src={conversationPartner?.avatar ?? '/default-profile.png'}
        style={{ width: 'auto', height: 'auto' }}
      />
    </div>
  );
};
