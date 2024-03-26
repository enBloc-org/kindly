import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getProfile } from '@/utils/supabase/getProfile';
import { createSupabaseClient as supabase } from '../../utils/supabase/createSupabaseClient';

type ConversationPartnerProps = {
  conversation_id: number;
  user_conversationId?: number;
};

type ConversationPartnerType = {
  username: string;
  avatar: string;
};

export const ConversationPartner: React.FC<ConversationPartnerProps> = ({
  conversation_id,
  user_conversationId,
}) => {
  const [conversationPartner, setConversationPartner] = useState<
    ConversationPartnerType | undefined
  >();

  useEffect(() => {
    const getConversationPartner = async () => {
      const { data: interlocutors } = await supabase
        .from('user_conversations')
        .select('user_id')
        .eq('conversation_id', conversation_id)
        .neq('id', user_conversationId);

      const partnerProfile = await getProfile(
        supabase,
        interlocutors?.[0].user_id
      );

      setConversationPartner(partnerProfile.data);
    };

    getConversationPartner();
  }, [conversation_id]);

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
