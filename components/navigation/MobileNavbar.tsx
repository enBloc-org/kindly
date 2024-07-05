'use client';

// Components
import NavigationLinkContainer from './NavigationLinkContainer';
import HomeRouteIcon from '../icons/navigation/HomeRouteIcon';
import SearchRouteIcon from '../icons/navigation/SearchRouteIcon';
import AboutRouteIcon from '../icons/navigation/AboutRouteIcon';
import AddItemRouteIcon from '../icons/navigation/AddItemRouteIcon';
import MessageRouteIcon from '../icons/navigation/MessageRouteIcon';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import selectUserUnreadConversations from '@/supabase/models/messaging/selectUserUnreadConversations';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import selectLoggedUserId from '@/supabase/utils/selectLoggedUserId';
import '../../app/styles/messaging-styles.css';

const MobileNavbar = () => {
  const pathname = usePathname();
  const supabase = createClientComponentClient();
  const [userId, setUserId] = useState<string>('');
  const [notification, setNotification] = useState<boolean>(false);

  useEffect(() => {
    const getUserId = async () => {
      const data = await selectLoggedUserId();
      if (data) {
        setUserId(data);
      } else {
        console.error('Failed to fetch user Id');
      }
    };
    getUserId();
  }, []);

  useEffect(() => {
    const getUnreadConversations = async () => {
      if (!userId) return;
      const unreadConversations = await selectUserUnreadConversations(userId);
      if (unreadConversations.length > 0) {
        if (pathname !== '/conversations') {
          setNotification(true);
        }
      }
    };
    getUnreadConversations();
  }, [userId]);

  useEffect(() => {
    if (pathname === '/conversations') {
      setNotification(false);
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
              setNotification(true);
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
              setNotification(true);
            }
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [notification, pathname, userId]);

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
        {notification && (
          <div className='notification-dot right-1 top-1 !h-3 !w-3' />
        )}
      </NavigationLinkContainer>
    </nav>
  );
};

export default MobileNavbar;
