'use client';

import Link from 'next/link';
import ButtonRounded from '@/components/buttons/ButtonRounded';

const SuccessPage = ({ params }: { params: { itemId: string } }) => {
  const { itemId } = params;

  return (
    <div className='my-10 flex flex-col items-center gap-5'>
      <h1 className='text-center text-xl font-bold'>
        You have successfully added an item
      </h1>
      <Link href='/add-item'>
        <ButtonRounded type='button'>ADD ANOTHER ITEM</ButtonRounded>
      </Link>
      {itemId && (
        <Link href={`/item/${itemId}`}>
          <ButtonRounded type='button'>GO TO YOUR ITEM</ButtonRounded>
        </Link>
      )}
    </div>
  );
};

export default SuccessPage;
