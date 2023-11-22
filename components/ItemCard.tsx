import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type ItemCardPropType = {
  size: string;
  donor: string;
  location: string;
  postageCovered: boolean;
  link: string;
};

const ItemCard: React.FC<ItemCardPropType> = ({
  size,
  donor,
  location,
  postageCovered,
  link,
}) => {
  return (
    <Link href={link}>
      <div className='bg-white shadow-sm px-3 mx-3 rounded-lg max-w-40'>
        <h2 className='font-light p-3'>White Jumper</h2>
        <div className='flex gap-3'>
          <div className='pb-5'>
            <Image
              src={'/white-jumper.jpg'}
              alt='Jumper'
              width={200}
              height={250}
            />
          </div>
          <div className='flex flex-col justify-center'>
            <p className='text-xs'>
              <span className='text-primaryOrange font-light text-xs mr-2'>
                Size:
              </span>
              {size}
            </p>
            <p className='text-xs'>
              <span className='text-primaryOrange font-light text-xs mr-2'>
                Donor:
              </span>
              {donor}
            </p>
            <p className='text-xs'>
              <span className='text-primaryOrange font-light text-xs mr-2'>
                Location:
              </span>
              {location}
            </p>
            {postageCovered && (
              <p className='text-xs text-center italic mt-5'>Postage covered</p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
