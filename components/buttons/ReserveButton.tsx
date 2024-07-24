'use client';

import ButtonRounded from './ButtonRounded';
import { updateRequestToReserve } from '@/supabase/models/updateRequestToReserve';

type ReserveButtonProps = {
  itemId: number;
  userId: string;
};

const ReserveButton: React.FC<ReserveButtonProps> = ({ itemId, userId }) => {
  const handleReserve = async () => {
    if (itemId && userId) {
      await updateRequestToReserve(itemId, userId);
    } else {
      console.error('Item ID or User ID is missing');
    }
  };

  return (
    <ButtonRounded type='button' clickHandler={handleReserve}>
      RESERVE ITEM
    </ButtonRounded>
  );
};

export default ReserveButton;
