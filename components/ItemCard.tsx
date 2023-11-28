import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type ItemCardPropType = {
  imageSrc: string;
  item_name: string;
  condition: string;
  donated_by: string;
  postcode: string;
  postable: boolean;
  link: string;
};

const ItemCard: React.FC<ItemCardPropType> = ({
  imageSrc,
  item_name,
  condition,
  donated_by,
  postcode,
  postable,
  link,
}) => {
  return (
    <Link href={`${link}`}>
      <div className='bg-white shadow-sm px-3 mx-3 rounded-lg max-w-40'>
        <h2 className='font-light p-3'>{item_name}</h2>
        <div className='flex gap-3'>
          <div className='pb-5'>
            <Image
              src={`${imageSrc}`}
              alt={`${item_name}`}
              width={350}
              height={200}
            />
          </div>
          <div className='flex flex-col justify-center'>
            <p className='text-xs'>
              <span className='text-primaryOrange font-light text-xs mr-2'>
                Condition:
              </span>
              {condition}
            </p>
            <p className='text-xs'>
              <span className='text-primaryOrange font-light text-xs mr-2'>
                Donor:
              </span>
              {donated_by}
            </p>
            <p className='text-xs'>
              <span className='text-primaryOrange font-light text-xs mr-2'>
                Location:
              </span>
              {postcode}
            </p>
            {postable && (
              <p className='text-xs text-center italic mt-5'>Postage covered</p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
