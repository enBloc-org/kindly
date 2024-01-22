import Link from 'next/link';
import Image from 'next/image';

export default async function Index() {
  return (
    <>
      <header className=' flex justify-center bg-background py-2' role='banner'>
        <Image
          src='/KINDLY_LOGO.png'
          alt='Kindly clothes donations'
          height={108}
          width={329}
        />
      </header>
      <main
        className='grid items-center justify-items-center gap-5 p-4'
        role='main'
      >
        <h1 className='italic'>A place to support Ukrainian refugees</h1>
        <div className='flex'>
          <p className='font-extrabold'>I would like to donate items</p>
          <svg
            width='88'
            height='130'
            viewBox='0 0 88 130'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M2 11.4408C115.392 -13.8709 102.294 17.8254 27 105.441'
              stroke='#BBE3C3'
              strokeWidth='5'
            />
            <path
              d='M10.8446 115.424L22.0551 87.2624L40.8385 111.052L10.8446 115.424Z'
              fill='#BBE3C3'
            />
          </svg>
        </div>
        <Link
          href='/signup'
          className='text-3xl font-extrabold italic text-primaryOrange'
        >
          Register here
        </Link>
        <div>
          <svg
            width='115'
            height='165'
            viewBox='0 0 115 165'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M85.5 160.5C-33.984 170.766 -17.7625 132.009 96 17.5'
              stroke='#BBE3C3'
              strokeWidth='5'
            />
            <path
              d='M103.81 14.416L92.1209 42.6195L73.4517 17.6502L103.81 14.416Z'
              fill='#BBE3C3'
            />
          </svg>
          <p className='text-center font-extrabold'>
            I’m a Ukrainian refugee and I would like to receive or donate items
          </p>
        </div>
        <div className='flex space-x-2'>
          <p>Already have an account?</p>
          <Link href='/login' className='font-extrabold text-primaryOrange'>
            Log in
          </Link>
        </div>
      </main>
    </>
  );
}
