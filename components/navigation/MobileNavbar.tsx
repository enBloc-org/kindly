'use client';

// Components
import NavigationLinkContainer from './NavigationLinkContainer';
import SearchRouteIcon from '../icons/navigation/SearchRouteIcon';
import AddItemRouteIcon from '../icons/navigation/AddItemRouteIcon';
import MessageRouteIcon from '../icons/navigation/MessageRouteIcon';
import NotificationDot from '../NotificationDot';
import KindlyLogoLink from './KindlyLogoLink';

const MobileNavbar = ({
  userId,
  hasNotification,
}: {
  userId: string | null;
  hasNotification: boolean;
}) => {
  return (
    <div className='flex w-full items-center justify-between'>
      <nav className='flex items-center' role='menu'>
        <button className='p-[.1rem]'>
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
        <KindlyLogoLink />
      </nav>
      <nav className='flex items-center gap-1' role='navigation'>
        <NavigationLinkContainer href='/search' ariaLabel='Search page'>
          <SearchRouteIcon height={42} width={42} />
        </NavigationLinkContainer>
        <NavigationLinkContainer href='/add-item' ariaLabel='Add an item'>
          <AddItemRouteIcon height={42} width={42} />
        </NavigationLinkContainer>
        {userId && (
          <NavigationLinkContainer
            href='/conversations'
            ariaLabel='My messages'
          >
            <MessageRouteIcon height={42} width={42} />
            <NotificationDot
              hasNotification={hasNotification}
              top={0.35}
              left={1.25}
            />
          </NavigationLinkContainer>
        )}
      </nav>
    </div>
  );
};

export default MobileNavbar;
