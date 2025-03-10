'use client';

import Link from 'next/link';

// Components
import AboutRouteIcon from '../icons/navigation/AboutRouteIcon';
import AddItemRouteIcon from '../icons/navigation/AddItemRouteIcon';
import SearchRouteIcon from '../icons/navigation/SearchRouteIcon';
import ProfileRouteIcon from '../icons/navigation/ProfileRouteIcon';
import MessageRouteIcon from '../icons/navigation/MessageRouteIcon';
import NotificationDot from '../NotificationDot';
import KyndlyLogoLink from './KyndlyLogoLink';
import { useUser } from '@/context/UserProvider';

const DesktopNav = ({
  userId,
  hasNotification,
}: {
  userId: string | null;
  hasNotification: boolean;
}) => {
  const { user } = useUser();
  return (
    <nav
      className='hidden w-full items-center justify-between gap-4 px-24 py-6 text-center text-sm font-light lg:flex'
      role='navigation'
    >
      <KyndlyLogoLink width={100} />
      <div className='flex gap-5'>
        <Link
          href='/search'
          aria-label='Search page'
          className='flex items-center'
        >
          <SearchRouteIcon width={30} height={30} />
          Search Items
        </Link>
        <Link
          href='/add-item'
          aria-label='Add an item'
          className='flex items-center'
        >
          <AddItemRouteIcon width={30} height={30} />
          Post an Item
        </Link>
        {userId && (
          <Link
            href='/conversations'
            aria-label='My messages'
            className='relative flex items-center'
          >
            <MessageRouteIcon width={30} height={30} />
            Messages
            <NotificationDot
              hasNotification={hasNotification}
              top={0.1}
              left={1}
            />
          </Link>
        )}
        <Link
          href='/about'
          aria-label='About page'
          className='flex items-center'
        >
          <AboutRouteIcon width={25} height={25} />
          FAQ
        </Link>
      </div>
      <Link
        href='/profile'
        aria-label='My profile'
        className='flex items-center'
      >
        <ProfileRouteIcon width={25} height={25} />
        {user ? (user.username ? user.username : 'Profile') : 'Profile'}
      </Link>
    </nav>
  );
};

export default DesktopNav;
