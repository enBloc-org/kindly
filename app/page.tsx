import Link from 'next/link';
import Image from 'next/image';

export default async function Index() {
  return (
    <div>
      <header className=' bg-background flex justify-center py-2   '>
        <Image
          src='/KINDLY_LOGO.png'
          alt='Kindly Logo'
          height={308}
          width={129}
        />
      </header>
      <h1>A place to support Ukrainian refugees</h1>
      <p>I would like to donate items</p>
      <Link href='/signup'>Register here</Link>
      <p>I’m a Ukrainian refugee and I would like to receive or donate items</p>
      <div>
        <p>Already have an account?</p>
        <Link href='/login'>Log in</Link>
      </div>
    </div>
  );
}
