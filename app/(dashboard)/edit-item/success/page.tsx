import Link from 'next/link';
import ButtonRounded from '@/components/buttons/ButtonRounded';

const SuccessEditItemPage = () => {
  return (
    <div className='my-10 flex flex-col items-center gap-5'>
      <h1 className='text-center text-xl font-bold'>
        Item was successfully edited.
      </h1>
      <Link href='/profile'>
        <ButtonRounded type='button'>Your profile</ButtonRounded>
      </Link>
    </div>
  );
};

export default SuccessEditItemPage;
