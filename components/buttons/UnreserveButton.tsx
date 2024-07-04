import upsertRow from '@/supabase/models/upsertRow';

type UnreserveButtonProps = {
  itemId: number;
};

const UnreserveButton: React.FC<UnreserveButtonProps> = ({ itemId }) => {
  const handleUnreserve = async () => {
    try {
      await upsertRow('items', {
        id: itemId,
        reserved: false,
        reserved_by: undefined,
      });
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
