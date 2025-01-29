'use client';

// Components
import NavigationLinkContainer from './NavigationLinkContainer';
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
  return (
    <div className='flex w-full items-center justify-between'>
      <div className='flex items-center'>
        <HamburgerMenu />
        <KindlyLogoLink />
      </div>
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
