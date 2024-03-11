import Link from 'next/link';
import ButtonRounded from '@/components/buttons/ButtonRounded';

const SuccessPage = () => {
  return (
    <div className='my-10 flex flex-col items-center gap-5'>
      <h1 className='text-center text-xl font-bold'>
        You&apos;ve successfully add an item
      </h1>
      <Link href='/add-item'>
        <ButtonRounded type='button'>ADD ANOTHER ITEM</ButtonRounded>
      </Link>
    </div>
  );
};

export default SuccessPage;
