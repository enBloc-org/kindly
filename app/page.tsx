import Link from 'next/link';
import Image from 'next/image';

export default async function Index() {
  return (
    <div className='min-h-screen p-4 grid items-center justify-items-center'>
      <header className=' bg-background flex justify-center py-2   '>
        <Image
          src='/KINDLY_LOGO.png'
          alt='Kindly Logo'
          height={108}
          width={329}
        />
      </header>
      <h1 className='italic'>A place to support Ukrainian refugees</h1>
      <p className='font-extrabold'>I would like to donate items</p>
      <Link href='/signup' className='font-extrabold italic text-primaryOrange'>
        Register here
      </Link>
      <p className='font-extrabold text-center'>
        I’m a Ukrainian refugee and I would like to receive or donate items
      </p>
      <div className='flex space-x-2'>
        <p>Already have an account?</p>
        <Link href='/login' className='font-extrabold text-primaryOrange'>
          Log in
        </Link>
      </div>
    </div>
  );
}
