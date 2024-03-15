import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getProfile } from '@/utils/supabase/getProfile';
import { createSupabaseClient as supabase } from '../../utils/supabase/createSupabaseClient';
import { useConversationContext } from '@/context/conversationContext';

// type ConversationCardProps = {
//   conversation_partner: {
//     username: string;
//     avatar: string;
//   };
// };

type ConversationPartnerType = {
  username: string;
  avatar: string;
};

export const ConversationPartner: React.FC = ({ message_data }) => {
  const [conversationPartner, setConversationPartner] = useState<
    ConversationPartnerType | undefined
  >();
  const { currentConversation } = useConversationContext();

  useEffect(() => {
    const getConversationPartner = async () => {
      const conversationPartnerSet =
        message_data &&
        new Set(message_data.map((message) => message.sender_id)); // set from conversation contributors

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

        if (conversationPartnerID !== undefined) {
          partnerProfile = await getProfile(supabase, conversationPartnerID);
        }

        await getProfile(supabase, conversationDonorID);

        partnerProfile && setConversationPartner(partnerProfile.data);
      } else {
        const { data: fetchedItemDonor } = await supabase
          .from('items')
          .select('profiles(username, avatar)')
          .eq('id', currentConversation?.item_id);

        setConversationPartner(fetchedItemDonor[0].profiles);
      }
    };
    getConversationPartner();
  });
  return (
    <div className='flex flex-row items-center p-5'>
      <p data-testid='item-donor'>
        <b>From: </b>
        {conversationPartner?.username}
      </p>

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
