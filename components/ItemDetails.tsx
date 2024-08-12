import { PartialItem } from '@/types/supabaseTypes';

type ItemDetailPropType = PartialItem & {
  fontSize?: string;
  condition?: string;
  item_type?: string;
  postcode?: string;
  size?: string;
};

const ItemDetails: React.FC<ItemDetailPropType> = ({
  condition,
  size,
  postcode,
  postage_covered,
  fontSize,
}) => {
  return (
    <div className={`flex flex-col items-center gap-2 ${fontSize}`}>
      {size && (
        <p>
          <span className='mr-2 font-light text-primaryOrange'>Size:</span>
          {size}
        </p>
      )}
      {condition && (
        <p>
          <span className='mr-2 font-light text-primaryOrange'>Condition:</span>
          {condition}
        </p>
      )}
      {postcode && (
        <p>
          <span className='mr-2 font-light text-primaryOrange'>Location:</span>
          {postcode}
        </p>
      )}

      {postage_covered && (
        <p className='mt-3 text-center italic'>Postage covered</p>
      )}
    </div>
  );
};

export default ItemDetails;
