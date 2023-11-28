import Link from 'next/link';
import ButtonRounded from '@/components/ButtonRounded';

const SuccessPage = () => {
  return (
    <div>
      <h1>You` ve successfully add an item</h1>
      <Link href='/add-item'>
        <ButtonRounded type='button'>ADD ANOTHER ITEM</ButtonRounded>
      </Link>
    </div>
  );
};

export default SuccessPage;
