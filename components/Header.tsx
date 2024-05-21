'use client';
import useMediaQuery from './hooks/useMediaQuery';
import { useConversationContext } from '@/context/conversationContext';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

// Components
import Image from 'next/image';
import Link from 'next/link';
import DesktopNav from './navigation/DesktopNav';
import NavigationLinkContainer from './navigation/NavigationLinkContainer';
import ProfileRouteIcon from './icons/navigation/ProfileRouteIcon';
import { ConversationPartner } from './messaging/ConversationPartner';
import BackArrowIcon from './icons/BackArrowIcon';

export default function Header() {
  const {
    currentConversation,
    showConversationsList,
    setShowConversationsList,
  } = useConversationContext();
  const isBreakpoint = useMediaQuery(1000);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== '/conversations') {
      setShowConversationsList(true);
    }
  }, [pathname, setShowConversationsList]);

  const handleBackButtonClick = () => {
    setShowConversationsList((prevState) => !prevState);
  };

  return (
    <header className='min-h-30 sticky top-0 z-10 flex flex-shrink-0 items-center justify-between bg-background px-4 py-2 shadow-sm'>
      <div className='flex items-center'>
        {showConversationsList ? (
          <Link href='/home-page' aria-label='Home page'>
            <Image
              src='/KINDLY_LOGO.png'
              alt='Kindly Logo'
              height={70}
              width={110}
            />
          </Link>
        ) : (
          <button onClick={handleBackButtonClick}>
            <BackArrowIcon width={40} height={40} stroke='#54BB89' />
          </button>
        )}
      </div>
      {isBreakpoint ? (
        showConversationsList ? (
          <NavigationLinkContainer
            href='/profile'
            ariaLabel='My profile'
            pathName={pathname}
            size='mobile'
          >
            <ProfileRouteIcon pathName={pathname} height={28} width={28} />
          </NavigationLinkContainer>
        ) : (
          <ConversationPartner
            conversation_id={currentConversation?.conversation_id as number}
          />
        )
      ) : (
        <DesktopNav />
      )}
    </header>
  );
}
