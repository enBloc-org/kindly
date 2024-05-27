'use client';
import Link from 'next/link';
import ButtonRounded from '@/components/buttons/ButtonRounded';
import ButtonGoToItem from '@/components/buttons/ButtonGoToItem';

import React from 'react';
import { useSearchParams } from 'next/navigation';

const SuccessPage = async () => {
  const searchParams = useSearchParams();
  const idItem = searchParams.get('id');
  return (
    <div className='my-10 flex flex-col items-center gap-5'>
      <h1 className='text-center text-xl font-bold'>
        You have successfully added an item
      </h1>
      <Link href='/add-item'>
        <ButtonRounded type='button'>ADD ANOTHER ITEM</ButtonRounded>
      </Link>
      <Link href={`/item/${idItem}`}>
        <ButtonGoToItem type='button'>GO TO YOUR ITEM</ButtonGoToItem>
      </Link>
    </div>
  );
};

export default SuccessPage;
