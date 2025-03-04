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

const DesktopNav = ({
  userId,
  hasNotification,
}: {
  userId: string | null;
  hasNotification: boolean;
}) => {
  return (
    <nav
      className='hidden w-full items-center justify-between gap-4 px-24 py-6 text-center text-sm font-light lg:flex'
      role='navigation'
    >
      <KyndlyLogoLink />
      <div className='flex gap-5'>
        <Link
          href='/search'
          aria-label='Search page'
          className='flex items-center'
        >
          <SearchRouteIcon width={38} height={38} />
          Search Items
        </Link>
        <Link
          href='/add-item'
          aria-label='Add an item'
          className='flex items-center'
        >
          <AddItemRouteIcon width={38} height={38} />
          Post an Item
        </Link>
        {userId && (
          <Link
            href='/conversations'
            aria-label='My messages'
            className='relative flex items-center'
          >
            <MessageRouteIcon width={38} height={38} />
            Messages
            <NotificationDot
              hasNotification={hasNotification}
              top={0.25}
              left={1.25}
            />
          </Link>
        )}
        <Link
          href='/about'
          aria-label='About page'
          className='flex items-center'
        >
          <AboutRouteIcon width={38} height={38} />
          FAQ
        </Link>
      </div>
      <Link
        href='/profile'
        aria-label='My profile'
        className='flex items-center'
      >
        <ProfileRouteIcon width={38} height={38} />
        Profile
      </Link>
    </nav>
  );
};

export default DesktopNav;
