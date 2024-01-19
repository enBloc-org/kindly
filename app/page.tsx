import Link from 'next/link';
import Image from 'next/image';

import MessageCard from '@/components/messaging/MessageCard';

export default async function Index() {
  return (
    <>
      <header className=' bg-background flex justify-center py-2' role='banner'>
        <Image
          src='/KINDLY_LOGO.png'
          alt='Kindly clothes donations'
          height={108}
          width={329}
        />
      </header>
      <main
        className='p-4 grid gap-5 items-center justify-items-center'
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
          className='font-extrabold text-3xl italic text-primaryOrange'
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
          <p className='font-extrabold text-center'>
            I’m a Ukrainian refugee and I would like to receive or donate items
          </p>
        </div>
        <div className='flex space-x-2'>
          <p>Already have an account?</p>
          <Link href='/login' className='font-extrabold text-primaryOrange'>
            Log in
          </Link>
        </div>

        <MessageCard 
          id={1}
          created_at={new Date()}
          conversation_id={666}
          sender_id={'testUser'}
          message_text={'Hi! Can I have your stuff please? I really like it alot.'}
          is_read={true}
        />
      </main>
    </>
  );
}
