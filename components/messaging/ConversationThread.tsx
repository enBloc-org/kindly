import TickIcon from '../icons/tickIcon';

type ConversationThreadProps = {
  sentBy: string;
  lastMessage: string;
  dateSent: string;
  read: boolean;
};

const cutAfterNCharacters = (text: string, n: number): string => {
  return text.length > n ? text.substring(0, n) : text;
};

const ConversationThread: React.FC<ConversationThreadProps> = ({
  sentBy,
  lastMessage,
  dateSent,
  read,
}) => {
  const shortenedText = cutAfterNCharacters(lastMessage, 75);

  return (
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
  );
};

export default ConversationThread;
