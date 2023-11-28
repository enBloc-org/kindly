import Link from 'next/link';
import ButtonRounded from '@/components/ButtonRounded';

const SuccessPage = () => {
  return (
    <div className='flex flex-col items-center gap-5 my-10'>
      <h1 className='text-xl text-center font-bold'>
        You&apos;ve successfully add an item
      </h1>
      <Link href='/add-item'>
        <ButtonRounded type='button'>ADD ANOTHER ITEM</ButtonRounded>
      </Link>
    </div>
  );
};

export default SuccessPage;
