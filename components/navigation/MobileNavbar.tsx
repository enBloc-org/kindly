'use client';
import { usePathname } from 'next/navigation';

// Components
import NavigationLinkContainer from './NavigationLinkContainer';
import HomeRouteIcon from '../icons/navigation/HomeRouteIcon';
import SearchRouteIcon from '../icons/navigation/SearchRouteIcon';
import AboutRouteIcon from '../icons/navigation/AboutRouteIcon';
import AddItemRouteIcon from '../icons/navigation/AddItemRouteIcon';
import MessageRouteIcon from '../icons/navigation/MessageRouteIcon';

const MobileNavbar = () => {
  const pathname = usePathname();

  return (
    <nav className='flex items-center justify-around' role='navigation'>
      <NavigationLinkContainer
        href='/home-page'
        ariaLabel='Home page'
        pathName={pathname}
        size='mobile'
      >
        <HomeRouteIcon pathName={pathname} height={28} width={28} />
      </NavigationLinkContainer>
      <NavigationLinkContainer
        href='/search'
        ariaLabel='Search page'
        pathName={pathname}
        size='mobile'
      >
        <SearchRouteIcon pathName={pathname} height={28} width={28} />
      </NavigationLinkContainer>
      <NavigationLinkContainer
        href='/add-item'
        ariaLabel='Add an item'
        pathName={pathname}
        size='mobile'
      >
        <AddItemRouteIcon pathName={pathname} height={45} width={45} />
      </NavigationLinkContainer>
      <NavigationLinkContainer
        href='/about'
        ariaLabel='About page'
        pathName={pathname}
        size='mobile'
      >
        <AboutRouteIcon pathName={pathname} height={28} width={28} />
      </NavigationLinkContainer>
      <NavigationLinkContainer
        href='/conversations'
        ariaLabel='My messages'
        pathName={pathname}
        size='mobile'
      >
        <MessageRouteIcon pathName={pathname} height={28} width={28} />
      </NavigationLinkContainer>
    </nav>
  );
};

export default MobileNavbar;
