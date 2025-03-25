import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import HomeRouteIcon from '../icons/navigation/HomeRouteIcon';
import SearchRouteIcon from '../icons/navigation/SearchRouteIcon';
import AddItemRouteIcon from '../icons/navigation/AddItemRouteIcon';
import MessageRouteIcon from '../icons/navigation/MessageRouteIcon';
import ProfileRouteIcon from '../icons/navigation/ProfileRouteIcon';
import MainButton from '../buttons/MainButton/MainButton';
import NotificationDot from '../NotificationDot';

type HamburgerMenuProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  userId: string | null;
  hasNotification: boolean;
};

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  userId,
  hasNotification,
}) => {
  const clickHandler = () => setIsMenuOpen(false);

  return (
    <>
      <nav className='relative' role='menu'>
        <button
          className='ml-2 mr-4 flex flex-col items-center justify-center gap-1'
          aria-label='Menu button'
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span
            className={`block h-[0.2rem] w-5 rounded-full
                          bg-base-110 transition-all duration-300 ease-out ${
                            isMenuOpen
                              ? 'translate-y-[0.145rem] rotate-45 lg:translate-y-4'
                              : '-translate-y-0.0'
                          }`}
          ></span>
          <span
            className={`block h-[0.2rem] w-5 rounded-full bg-base-110
                          transition-all duration-300 ease-out ${
                            isMenuOpen ? 'opacity-0' : 'opacity-100'
                          }`}
          ></span>
          <span
            className={`block h-[0.2rem] w-5 rounded-full bg-base-110
                          transition-all duration-300 ease-out ${
                            isMenuOpen
                              ? '-translate-y-3 -rotate-45 lg:-translate-y-4'
                              : 'translate-y-0'
                          }`}
          ></span>{' '}
        </button>
      </nav>
      <div
        className={`absolute left-0 top-[64px] z-50 h-full w-full transform bg-monoY px-2 py-6 transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? 'visible translate-y-0 opacity-100'
            : 'invisible -translate-y-16 opacity-0'
        }`}
      >
        {!userId && (
          <div className='mb-4 flex w-full flex-col items-center justify-center gap-4'>
            <Link href='/signup'>
              <MainButton
                size='large'
                type='button'
                styling='w-full min-w-[325px]'
                clickHandler={clickHandler}
              >
                Sign up
              </MainButton>
            </Link>
            <Link href='/login'>
              <MainButton
                size='large'
                type='button'
                variant='secondary'
                styling='w-full min-w-[325px]'
                clickHandler={clickHandler}
              >
                Log in
              </MainButton>
            </Link>
          </div>
        )}
        <Link href='/' className='menu-link' onClick={clickHandler}>
          <HomeRouteIcon height={42} width={42} />
          Home
        </Link>
        <Link href='/search' className='menu-link' onClick={clickHandler}>
          <SearchRouteIcon height={42} width={42} />
          Search Items
        </Link>
        <Link href='/add-item' className='menu-link' onClick={clickHandler}>
          <AddItemRouteIcon height={42} width={42} />
          Post an Item
        </Link>
        <Link
          href='/conversations'
          className='menu-link relative'
          onClick={clickHandler}
        >
          <NotificationDot
            hasNotification={hasNotification}
            top={1}
            left={1.2}
          />
          <MessageRouteIcon height={42} width={42} />
          Messages
        </Link>
        <Link
          href='/profile'
          className='menu-link last-link'
          onClick={clickHandler}
        >
          <ProfileRouteIcon height={42} width={42} />
          Profile
        </Link>
        <div className='mt-4 flex flex-col gap-4 px-4'>
          <Link href='/about' onClick={clickHandler}>
            About Kyndly
          </Link>
          <Link href='/about' onClick={clickHandler}>
            Frequently Asked Questions
          </Link>
          <Link href='/about' onClick={clickHandler}>
            Contacts
          </Link>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
