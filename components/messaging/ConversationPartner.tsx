import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getProfile } from '../../utils/supabase/getProfile';
import { createSupabaseClient as supabase } from '../../utils/supabase/createSupabaseClient';
import { useConversationContext } from '@/context/conversationContext';
import selectConversationPartner from '@/utils/messaging/selectConversationPartner';

type ConversationPartnerProps = {
  conversation_id: number;
  hideImage?: boolean;
};

type ConversationPartnerType = {
  username: string;
  avatar: string;
};

/**
 *
 * @param conversation_id refers to the relevant "converstion_id" value returned from the user_conversations table
 * @param user_conversationId refers to the relevant "id" value returned from the user_conversations table
 * @param hideImage is optional and allows us to display only the users name without an avatar.
 *                  If this parameter is excluded an avatar will be displayed with either the users image or a default avatar if none has been set.
 */
export const ConversationPartner: React.FC<ConversationPartnerProps> = ({
  conversation_id,
  hideImage,
}) => {
  const [conversationPartner, setConversationPartner] = useState<
    ConversationPartnerType | undefined
  >();
  const { currentUserId } = useConversationContext();

  useEffect(() => {
    const getPartnerProfile = async () => {
      const partnerId = await selectConversationPartner(
        conversation_id,
        currentUserId
      );
      const partnerProfile = await getProfile(supabase, partnerId);

      setConversationPartner(partnerProfile.data);
    };

    getPartnerProfile();
  }, [conversation_id]);

  return (
    <div className='flex flex-row items-center'>
      <p data-testid='conversation-partner-name'>
        {conversationPartner?.username}
      </p>

      {!hideImage && (
        <Image
          className='ml-2 rounded-full'
          alt='user logo'
          width='25'
          height='35'
          src={conversationPartner?.avatar ?? '/default-profile.png'}
          style={{ width: 'auto', height: 'auto' }}
          data-testid='conversation-partner-avatar'
        />
      )}
    </div>
  );
};
