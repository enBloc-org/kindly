'use client';

// Components
import { useState } from 'react';
import Link from 'next/link';
import SearchRouteIcon from '../icons/navigation/SearchRouteIcon';
import AddItemRouteIcon from '../icons/navigation/AddItemRouteIcon';
import MessageRouteIcon from '../icons/navigation/MessageRouteIcon';
import NotificationDot from '../NotificationDot';
import KindlyLogoLink from './KindlyLogoLink';
import HamburgerMenu from '@/components/menus/HamburgerMenu';

const MobileNavbar = ({
  userId,
  hasNotification,
}: {
  userId: string | null;
  hasNotification: boolean;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='flex w-full items-center justify-between'>
      <div className='flex items-center'>
        <HamburgerMenu
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          userId={userId}
          hasNotification={hasNotification}
        />
        <KindlyLogoLink />
      </div>
      <nav className='flex items-center gap-1' role='navigation'>
        {isMenuOpen ? (
          <button onClick={() => setIsMenuOpen(false)}>
            <svg
              width='42'
              height='42'
              viewBox='0 0 42 42'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M28.4117 13.5883L13.5881 28.4118'
                stroke='#333333'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M13.5881 13.5883L28.4117 28.4118'
                stroke='#333333'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        ) : (
          <>
            <Link href='/search' aria-label='Search page'>
              <SearchRouteIcon height={42} width={42} />
            </Link>
            <Link href='/add-item' aria-label='Add an item'>
              <AddItemRouteIcon height={42} width={42} />
            </Link>
            {userId && (
              <Link
                href='/conversations'
                aria-label='My messages'
                className='relative'
              >
                <MessageRouteIcon height={42} width={42} />
                <NotificationDot
                  hasNotification={hasNotification}
                  top={0.35}
                  left={1.45}
                />
              </Link>
            )}
          </>
        )}
      </nav>
    </div>
  );
};

export default MobileNavbar;
