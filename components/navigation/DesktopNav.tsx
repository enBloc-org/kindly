'use client';

// Components
import NavigationLinkContainer from './NavigationLinkContainer';
import AboutRouteIcon from '../icons/navigation/AboutRouteIcon';
import AddItemRouteIcon from '../icons/navigation/AddItemRouteIcon';
import SearchRouteIcon from '../icons/navigation/SearchRouteIcon';
import ProfileRouteIcon from '../icons/navigation/ProfileRouteIcon';
import MessageRouteIcon from '../icons/navigation/MessageRouteIcon';
import NotificationDot from '../NotificationDot';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import selectUserUnreadConversations from '@/supabase/models/messaging/selectUserUnreadConversations';
import newClient from '@/supabase/utils/newClient';
import selectLoggedUserId from '@/supabase/utils/selectLoggedUserId';

const DesktopNav = () => {
  const pathname = usePathname();
  const supabase = newClient();
  const [userId, setUserId] = useState<string>('');
  const [hasNotification, setHasNotification] = useState<boolean>(false);

  useEffect(() => {
    const getUserId = async () => {
      try {
        const data = await selectLoggedUserId();
        if (data) {
          setUserId(data);
        } else {
          console.error('Failed to fetch user Id');
        }
      } catch (error) {
        console.error('Error fetching user Id:', error);
      }
    };
    getUserId();
  }, []);

  useEffect(() => {
    const getUnreadConversations = async () => {
      if (!userId) return;

      try {
        const unreadConversations = await selectUserUnreadConversations(userId);
        if (unreadConversations.length > 0 && pathname !== '/conversations') {
          setHasNotification(true);
        }
      } catch (error) {
        console.error('Failed to fetch unread conversations :', error);
      }
    };
    getUnreadConversations();
  }, [userId]);

  useEffect(() => {
    if (pathname === '/conversations') {
      setHasNotification(false);
    }
  }, [pathname]);

  useEffect(() => {
    const channel = supabase
      .channel('realtime conversations notifications')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'user_conversations',
          filter: `user_id=eq.${userId}`,
        },
        (payload) => {
          if (payload.new.user_id === userId) {
            if (pathname !== '/conversations') {
              setHasNotification(true);
            }
          }
        }
      )
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'user_conversations',
          filter: `user_id=eq.${userId}`,
        },
        (payload) => {
          if (payload.new.has_unread_messages) {
            if (pathname !== '/conversations') {
              setHasNotification(true);
            }
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [hasNotification, pathname, userId]);

  return (
    <nav
      className='flex items-center justify-center gap-4 px-1 text-center text-xs font-light'
      role='navigation'
    >
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
        href='/conversations'
        ariaLabel='My messages'
        pathName={pathname}
        size='desktop'
      >
        <MessageRouteIcon width={38} height={38} pathName={pathname} />
        Message
        <NotificationDot
          hasNotification={hasNotification}
          height={0.75}
          width={0.75}
          top={0.75}
          left={2.25}
        />
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
