import React from 'react';
import { usePathname } from 'next/navigation';

//Components
import LinkContainer from './navigation/LinkContainer';

const DesktopNav = () => {
  const pathname = usePathname();

  return (
    <nav
      className='flex items-center justify-center gap-4 px-1 text-center text-xs font-light'
      role='navigation'
    >
      <LinkContainer
        href='/home-page'
        ariaLabel='Home page'
        pathName={pathname}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='38'
          height='38'
          viewBox='0 0 32 32'
        >
          <path
            fill={pathname === '/home-page' ? '#FF9E5E' : '#54BB89'}
            d='M16.612 2.214a1.01 1.01 0 0 0-1.242 0L1 13.419l1.243 1.572L4 13.621V26a2.004 2.004 0 0 0 2 2h20a2.004 2.004 0 0 0 2-2V13.63L29.757 15L31 13.428ZM18 26h-4v-8h4Zm2 0v-8a2.002 2.002 0 0 0-2-2h-4a2.002 2.002 0 0 0-2 2v8H6V12.062l10-7.79l10 7.8V26Z'
          />
        </svg>
        Home
      </LinkContainer>
      <LinkContainer href='/about' ariaLabel='About page' pathName={pathname}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='38'
          height='38'
          viewBox='0 0 64 64'
        >
          <g fill={pathname === '/about' ? '#FF9E5E' : '#54BB89'}>
            <path d='M30.249 2.065C18.612 2.789 12.531 9.379 12 21.296h11.739c.147-4.128 2.451-7.214 6.741-7.669c4.211-.447 8.206.556 9.416 3.435c1.307 3.11-1.627 6.724-3.022 8.241c-2.582 2.813-6.776 4.865-8.95 7.9c-2.131 2.974-2.51 6.887-2.674 11.676h10.346c.145-3.062.349-5.995 1.742-7.898c2.266-3.092 5.65-4.541 8.486-6.983c2.709-2.334 5.559-5.147 6.043-9.501C53.32 7.466 42.683 1.289 30.249 2.065' />
            <ellipse cx='30.515' cy='55.567' rx='6.532' ry='6.433' />
          </g>
        </svg>
        About
      </LinkContainer>
      <LinkContainer
        href='/add-item'
        ariaLabel='Add an item'
        pathName={pathname}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='38'
          height='38'
          viewBox='0 0 24 24'
        >
          <path
            fill={pathname === '/add-item' ? '#FF9E5E' : '#54BB89'}
            d='M18 10h-4V6a2 2 0 0 0-4 0l.071 4H6a2 2 0 0 0 0 4l4.071-.071L10 18a2 2 0 0 0 4 0v-4.071L18 14a2 2 0 0 0 0-4z'
          />
        </svg>
        Add item
      </LinkContainer>
      <LinkContainer href='/search' ariaLabel='Search page' pathName={pathname}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='35'
          height='35'
          viewBox='0 0 16 16'
        >
          <path
            fill={pathname === '/search' ? '#FF9E5E' : '#54BB89'}
            d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0'
          />
        </svg>
        Search
      </LinkContainer>
      <LinkContainer href='/profile' ariaLabel='My profile' pathName={pathname}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='38'
          height='38'
          viewBox='0 0 24 24'
        >
          <svg
            fill='none'
            stroke={pathname === '/profile' ? '#FF9E5E' : '#54BB89'}
          >
            <path d='M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z' />
            <circle cx='12' cy='7' r='3.5' />
          </svg>
        </svg>
        Profile
      </LinkContainer>
    </nav>
  );
};

export default DesktopNav;
