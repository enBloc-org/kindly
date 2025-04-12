'use client';
import { useRouter } from 'next/navigation';
import MainButton from '../buttons/MainButton/MainButton';

export default function DonateBrowseButtons() {
  const router = useRouter();
  return (
    <div className='m-10 flex  w-full flex-wrap  justify-center gap-[10px] md:gap-[20px] lg:gap-[20px]  '>
      <MainButton
        clickHandler={() => router.push('/add-item')}
        size='small'
        variant='primary'
        type='button'
      >
        Donate Item
      </MainButton>
      <MainButton
        clickHandler={() => router.push('/search')}
        size='small'
        variant='secondary'
        type='button'
      >
        Browse Button
      </MainButton>
    </div>
  );
}
