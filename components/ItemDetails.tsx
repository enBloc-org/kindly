import { PartialItem } from '@/utils/supabase/types';

type ItemDetailPropType = PartialItem & {
  fontSize: string;
};

const ItemDetails: React.FC<ItemDetailPropType> = ({
  condition,
  donated_by,
  postcode,
  postable,
  fontSize,
}) => {
  return (
    <div className={`flex flex-col justify-center items-center ${fontSize}`}>
      <p className=''>
        <span className='text-primaryOrange font-light mr-2'>Condition:</span>
        {condition}
      </p>
      <p className=''>
        <span className='text-primaryOrange font-light mr-2'>Donor:</span>
        {donated_by}
      </p>
      <p className=''>
        <span className='text-primaryOrange font-light mr-2'>Location:</span>
        {postcode}
      </p>
      {postable && <p className='text-center italic mt-5'>Postage covered</p>}
    </div>
  );
};

export default ItemDetails;
