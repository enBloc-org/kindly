import { PartialItem } from '@/types/supabaseTypes';

type ItemDetailPropType = PartialItem & {
  fontSize?: string;
  condition?: string;
  item_type?: string;
  postcode?: string;
};

const ItemDetails: React.FC<ItemDetailPropType> = ({
  condition,
  item_type,
  postcode,
  postable,
  fontSize,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-1 ${fontSize}`}
    >
      {condition && (
        <p className=''>
          <span className='mr-2 font-light text-primaryOrange'>Condition:</span>
          {condition}
        </p>
      )}
      {item_type && (
        <p className=''>
          <span className='mr-2 font-light text-primaryOrange'>Category:</span>
          {item_type}
        </p>
      )}
      {postcode && (
        <p className=''>
          <span className='mr-2 font-light text-primaryOrange'>Location:</span>
          {postcode}
        </p>
      )}

      {postable && <p className='mt-5 text-center italic'>Postage covered</p>}
    </div>
  );
};

export default ItemDetails;
