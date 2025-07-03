'use client';

// Components
import { useState } from 'react';
import Link from 'next/link';
import SearchRouteIcon from '../icons/navigation/SearchRouteIcon';
import AddItemRouteIcon from '../icons/navigation/AddItemRouteIcon';
import MessageRouteIcon from '../icons/navigation/MessageRouteIcon';
import NotificationDot from '../NotificationDot';
import KyndlyLogoLink from './KyndlyLogoLink';
import HamburgerMenu from '@/components/menus/HamburgerMenu';
import { useUser } from '@/context/UserProvider';

const MobileNavbar = ({ hasNotification }: { hasNotification: boolean }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userId } = useUser();
  return (
    <div className='flex w-full items-center justify-between lg:hidden'>
      <div className='flex items-center'>
        <HamburgerMenu
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          userId={userId}
          hasNotification={hasNotification}
        />
        <KyndlyLogoLink />
      </div>
      <nav className='flex items-center gap-1' role='navigation'>
        {!isMenuOpen && (
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
