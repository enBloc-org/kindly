import Image from 'next/image';

type ConversationCardProps = {
  conversation_partner: {
    username: string;
    avatar: string;
  };
};

export const ConversationPartner: React.FC<ConversationCardProps> = ({
  conversation_partner,
}) => {
  return (
    <div className='flex flex-row items-center p-5'>
      <p data-testid='item-donor'>
        <b>From: </b>
        {conversation_partner.username}
      </p>

      <Image
        className='ml-2 rounded-full'
        alt='user logo'
        width='25'
        height='35'
        src={conversation_partner.avatar ?? '/default-profile.png'}
        style={{ width: 'auto', height: 'auto' }}
      />
    </div>
  );
};
