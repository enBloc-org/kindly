//Components
import MeatballIcon from '@/components/icons/MeatballIcon';
import PlusIcon from '@/components/icons/PlusIcon';
import ConversationThread from '@/components/messaging/ConversationThread';

const data = [
  {
    sent_by: 'Peter',
    last_message:
      "Hi I'm interested in you item, can you tell me when I can pick it up? I live in Hackney and I can travel anywhere east.",
    time_stamp: '12/1/23',
    read: false,
    conversation_id: 43,
  },
  {
    sent_by: 'Paula',
    last_message:
      "Hi I'm interested in you item, can you tell me when I can pick it up? I live in Hackney and I can travel anywhere east.",
    time_stamp: '12/1/23',
    read: true,
    conversation_id: 42,
  },
];

const Conversations = () => {
  return (
    <>
      <div className='mt-4 flex justify-between px-3 '>
        <button>
          <PlusIcon width={45} height={45} />
        </button>
        <button>
          <MeatballIcon width={35} height={35} />
        </button>
      </div>
      <div className='mt-4'>
        {data.map((thread) => {
          return (
            <ConversationThread
              key={thread.conversation_id}
              sentBy={thread.sent_by}
              lastMessage={thread.last_message}
              dateSent={thread.time_stamp}
              read={thread.read}
              conversationId={thread.conversation_id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Conversations;
