import Link from 'next/link';
import ButtonRounded from '@/components/buttons/ButtonRounded';

const SuccessPage = ({ params }: { params: { itemId: string } }) => {
  const { itemId } = params;

  return (
    <div className='my-10 flex flex-col items-center gap-5'>
      <h1 className='text-center text-xl font-bold'>
        You have successfully added an item
      </h1>
      <div className='flex flex-col gap-4'>
        <Link href='/add-item'>
          <ButtonRounded type='button' width='w-full'>
            ADD ANOTHER ITEM
          </ButtonRounded>
        </Link>
        <Link href={`/item/${itemId}`}>
          <ButtonRounded type='button' width='w-full'>
            GO TO YOUR ITEM
          </ButtonRounded>
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
