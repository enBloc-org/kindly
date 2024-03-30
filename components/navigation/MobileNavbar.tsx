'use client';
import { usePathname } from 'next/navigation';

// Components
import MobileLinkContainer from './MobileLinkContainer';
import HomeRouteIcon from '../icons/navigation/HomeRouteIcon';
import SearchRouteIcon from '../icons/navigation/SearchRouteIcon';
import AboutRouteIcon from '../icons/navigation/AboutRouteIcon';
import ProfileRouteIcon from '../icons/navigation/ProfileRouteIcon';
import AddItemRouteIcon from '../icons/navigation/AddItemRouteIcon';

const MobileNavbar = () => {
  const pathname = usePathname();

  return (
    <nav className='flex items-center justify-around' role='navigation'>
      <MobileLinkContainer
        href='/home-page'
        ariaLabel='Home page'
        pathName={pathname}
      >
        <HomeRouteIcon pathName={pathname} height={28} width={28} />
      </MobileLinkContainer>
      <MobileLinkContainer
        href='/search'
        ariaLabel='Search page'
        pathName={pathname}
      >
        <SearchRouteIcon pathName={pathname} height={28} width={28} />
      </MobileLinkContainer>
      <MobileLinkContainer
        href='/add-item'
        ariaLabel='Add an item'
        pathName={pathname}
      >
        <AddItemRouteIcon pathName={pathname} height={45} width={45} />
      </MobileLinkContainer>
      <MobileLinkContainer
        href='/about'
        ariaLabel='About page'
        pathName={pathname}
      >
        <AboutRouteIcon pathName={pathname} height={28} width={28} />
      </MobileLinkContainer>
      <MobileLinkContainer
        href='/profile'
        ariaLabel='My profile'
        pathName={pathname}
      >
        <ProfileRouteIcon pathName={pathname} height={28} width={28} />
      </MobileLinkContainer>
    </nav>
  );
};

export default MobileNavbar;
