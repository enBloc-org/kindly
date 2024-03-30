import React from 'react';
import { usePathname } from 'next/navigation';

//Components
import NavigationLinkContainer from './NavigationLinkContainer';
import HomeRouteIcon from '../icons/navigation/HomeRouteIcon';
import AboutRouteIcon from '../icons/navigation/AboutRouteIcon';
import AddItemRouteIcon from '../icons/navigation/AddItemRouteIcon';
import SearchRouteIcon from '../icons/navigation/SearchRouteIcon';
import ProfileRouteIcon from '../icons/navigation/ProfileRouteIcon';

const DesktopNav = () => {
  const pathname = usePathname();

  return (
    <nav
      className='flex items-center justify-center gap-4 px-1 text-center text-xs font-light'
      role='navigation'
    >
      <NavigationLinkContainer
        href='/home-page'
        ariaLabel='Home page'
        pathName={pathname}
        size='desktop'
      >
        <HomeRouteIcon width={38} height={38} pathName={pathname} />
        Home
      </NavigationLinkContainer>
      <NavigationLinkContainer
        href='/about'
        ariaLabel='About page'
        pathName={pathname}
        size='desktop'
      >
        <AboutRouteIcon width={38} height={38} pathName={pathname} />
        About
      </NavigationLinkContainer>
      <NavigationLinkContainer
        href='/add-item'
        ariaLabel='Add an item'
        pathName={pathname}
        size='desktop'
      >
        <AddItemRouteIcon width={38} height={38} pathName={pathname} />
        Add item
      </NavigationLinkContainer>
      <NavigationLinkContainer
        href='/search'
        ariaLabel='Search page'
        pathName={pathname}
        size='desktop'
      >
        <SearchRouteIcon width={38} height={38} pathName={pathname} />
        Search
      </NavigationLinkContainer>
      <NavigationLinkContainer
        href='/profile'
        ariaLabel='My profile'
        pathName={pathname}
        size='desktop'
      >
        <ProfileRouteIcon width={38} height={38} pathName={pathname} />
        Profile
      </NavigationLinkContainer>
    </nav>
  );
};

export default DesktopNav;
