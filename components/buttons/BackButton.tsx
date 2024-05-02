'use client';
import { useRouter } from 'next/navigation';
import BackArrowIcon from '../icons/navigation/BackArrowIcon';

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      className='mx-3 my-5 rounded-full'
      role='button'
      aria-label='back button'
      onClick={router.back}
    >
      <BackArrowIcon width={40} height={40} />
    </button>
  );
};

export default BackButton;
