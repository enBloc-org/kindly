import upsertRow from '@/supabase/models/upsertRow';

type UnreserveButtonProps = {
  itemId: number;
  onReserveStatusChange: () => void;
};

const UnreserveButton: React.FC<UnreserveButtonProps> = ({
  itemId,
  onReserveStatusChange,
}) => {
  const handleUnreserve = async () => {
    try {
      await upsertRow('items', {
        id: itemId,
        reserved: false,
        reserved_by: null,
      });
      onReserveStatusChange();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      className='button button-rounded my-2'
      onClick={() => handleUnreserve()}
    >
      Unreserve
    </button>
  );
};

export default UnreserveButton;
