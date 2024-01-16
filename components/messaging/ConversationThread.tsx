import TickIcon from '../icons/tickIcon';
import Link from 'next/link';

type ConversationThreadProps = {
  sentBy: string;
  lastMessage: string;
  dateSent: string;
  read: boolean;
  conversationId: number;
};

const cutAfterNCharacters = (text: string, n: number): string => {
  return text.length > n ? text.substring(0, n) : text;
};

const ConversationThread: React.FC<ConversationThreadProps> = ({
  sentBy,
  lastMessage,
  dateSent,
  read,
  conversationId,
}) => {
  const shortenedText = cutAfterNCharacters(lastMessage, 50);

  return (
    <Link href={`/conversations/${conversationId}`}>
      <div className='m-2 flex max-h-28 rounded-lg bg-gray-300 p-4'>
        <div>
          <h2 className='font-bold'>{sentBy}</h2>
          <p className='mt-1 overflow-hidden font-light italic'>
            {shortenedText} ...
          </p>
        </div>
        <div className='flex flex-col items-end justify-between'>
          <p>{dateSent}</p>
          <TickIcon read={read} />
        </div>
      </div>
    </Link>
  );
};

export default ConversationThread;
