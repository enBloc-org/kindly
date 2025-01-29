import Link from 'next/link';
import HomeRouteIcon from '../icons/navigation/HomeRouteIcon';
import SearchRouteIcon from '../icons/navigation/SearchRouteIcon';
import AddItemRouteIcon from '../icons/navigation/AddItemRouteIcon';
import MessageRouteIcon from '../icons/navigation/MessageRouteIcon';
import ProfileRouteIcon from '../icons/navigation/ProfileRouteIcon';
import { Dispatch, SetStateAction } from 'react';

type HamburgerMenuProps = {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  menuOpen,
  setMenuOpen,
}) => {
  return (
    <>
      <nav className='relative' role='menu'>
        <button
          className='p-[.1rem]'
          aria-label='Menu button'
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <svg
            width='42'
            height='42'
            viewBox='0 0 42 42'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M13 15H29'
              stroke='#333333'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M13 21H29'
              stroke='#333333'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M13 27H29'
              stroke='#333333'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      </nav>
      {menuOpen && (
        <div className='absolute left-0 top-[64px] z-50 h-full w-full bg-monoY px-2 py-6'>
          <Link href='/' className='menu-link'>
            <HomeRouteIcon height={42} width={42} />
            Home
          </Link>
          <Link href='/search' className='menu-link'>
            <SearchRouteIcon height={42} width={42} />
            Search Items
          </Link>
          <Link href='/add-item' className='menu-link'>
            <AddItemRouteIcon height={42} width={42} />
            Post an Item
          </Link>
          <Link href='/conversations' className='menu-link'>
            <MessageRouteIcon height={42} width={42} />
            Messages
          </Link>
          <Link href='/profile' className='menu-link last-link'>
            <ProfileRouteIcon height={42} width={42} />
            Profile
          </Link>
          <div className='mt-4 flex flex-col gap-4 px-4'>
            <Link href='/about'>About Kyndly</Link>
            <Link href='/about'>Frequently Asked Questions</Link>
            <Link href='/profile'>Contacts</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
