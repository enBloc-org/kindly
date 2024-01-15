//Compon
import MeatballIcon from '@/components/icons/MeatballIcon';
import PlusIcon from '@/components/icons/PlusIcon';

const Conversations = () => {
  return (
    <>
      <div className='flex justify-between mt-4 px-3 '>
        <button>
          <PlusIcon width={45} height={45} />
        </button>
        <button>
          <MeatballIcon width={35} height={35} />
        </button>
      </div>
    </>
  );
};

export default Conversations;
