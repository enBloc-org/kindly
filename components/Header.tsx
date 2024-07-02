'use client';
import useMediaQuery from './hooks/useMediaQuery';
import { useConversationContext } from '@/context/conversationContext';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

// Components
import DesktopNav from './navigation/DesktopNav';
import NavigationLinkContainer from './navigation/NavigationLinkContainer';
import ProfileRouteIcon from './icons/navigation/ProfileRouteIcon';
import { ConversationPartner } from './messaging/ConversationPartner';
import BackArrowIcon from './icons/BackArrowIcon';
import KindlyLogoLink from './navigation/KindlyLogoLink';

type HeaderProps = {
  userId: string;
};

export default function Header({ userId }: HeaderProps) {
  const {
    conversationState: {
      currentConversation,
      showConversationsList,
      currentUserId,
    },
    dispatch,
  } = useConversationContext();

  const isBreakpoint = useMediaQuery(1000);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== '/conversations') {
      dispatch({ type: 'SET_SHOW_CONVERSATIONS_LIST', payload: true });
    }
  }, [pathname]);

  const handleBackButtonClick = () => {
    dispatch({ type: 'SET_SHOW_CONVERSATIONS_LIST', payload: true });
  };

  return (
    <header className='min-h-30 sticky top-0 z-10 flex flex-shrink-0 items-center justify-between bg-background px-4 py-2 shadow-sm'>
      {!isBreakpoint && <KindlyLogoLink />}
      {isBreakpoint ? (
        showConversationsList ? (
          <>
            <KindlyLogoLink />
            <NavigationLinkContainer
              href='/profile'
              ariaLabel='My profile'
              pathName={pathname}
              size='mobile'
            >
              <ProfileRouteIcon pathName={pathname} height={28} width={28} />
            </NavigationLinkContainer>
          </>
        ) : (
          <>
            <button onClick={handleBackButtonClick}>
              <BackArrowIcon width={40} height={40} stroke='#54BB89' />
            </button>
            <ConversationPartner
              currentUserId={currentUserId}
              conversation_id={currentConversation?.conversation_id as number}
            />
          </>
        )
      ) : (
        <DesktopNav userId={userId} />
      )}
    </header>
  );
}
