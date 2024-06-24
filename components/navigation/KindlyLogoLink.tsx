import Image from 'next/image';
import Link from 'next/link';

const KindlyLogoLink = () => {
  return (
    <div className='flex items-center'>
      <Link href='/home-page' aria-label='Home page'>
        <Image
          src='/KINDLY_LOGO.png'
          alt='Kindly Logo'
          height={70}
          width={110}
        />
      </Link>
    </div>
  );
};

export default KindlyLogoLink;
