'use client';
import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      className='rounded-full my-5 mx-3'
      role='button'
      aria-label='back button'
      onClick={router.back}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='40'
        height='40'
        viewBox='0 0 512 512'
      >
        <path
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='48'
          d='M244 400L100 256l144-144M120 256h292'
        />
      </svg>
    </button>
  );
};

export default BackButton;
