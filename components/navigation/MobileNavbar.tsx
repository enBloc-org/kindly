'use client';

// Components
import NavigationLinkContainer from './NavigationLinkContainer';
import HomeRouteIcon from '../icons/navigation/HomeRouteIcon';
import SearchRouteIcon from '../icons/navigation/SearchRouteIcon';
import AboutRouteIcon from '../icons/navigation/AboutRouteIcon';
import AddItemRouteIcon from '../icons/navigation/AddItemRouteIcon';
import MessageRouteIcon from '../icons/navigation/MessageRouteIcon';
import NotificationDot from '../NotificationDot';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import selectUserUnreadConversations from '@/supabase/models/messaging/selectUserUnreadConversations';
import selectLoggedUserId from '@/supabase/utils/selectLoggedUserId';
import notificationWatcher from '@/supabase/channels/notificationsWatcher';

const MobileNavbar = () => {
  const pathname = usePathname();
  const [userId, setUserId] = useState<string>('');
  const [hasNotification, setHasNotification] = useState<boolean>(false);

  useEffect(() => {
    const getUserId = async () => {
      try {
        const data = await selectLoggedUserId();
        if (!data) return;
        setUserId(data);
      } catch (error) {
        console.error('Error fetching user Id:', error);
      }
    };
    getUserId();
  }, []);

  useEffect(() => {
    const getUnreadConversations = async () => {
      if (!userId || pathname === '/conversations') {
        setHasNotification(false);
        return;
      }

      try {
        const unreadConversations = await selectUserUnreadConversations(userId);
        if (unreadConversations.length > 0) {
          setHasNotification(true);
        }
      } catch (error) {
        console.error('Failed to fetch unread conversations :', error);
      }
    };
    getUnreadConversations();
  }, [userId, pathname]);

  useEffect(() => {
    notificationWatcher(userId, pathname, setHasNotification);
  }, [hasNotification, pathname, userId]);

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
        <NotificationDot
          hasNotification={hasNotification}
          top={0.35}
          left={1.25}
        />
      </NavigationLinkContainer>
    </nav>
  );
};

export default MobileNavbar;
