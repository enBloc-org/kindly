'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

//Components
import NavigationLinkContainer from './NavigationLinkContainer';
import AboutRouteIcon from '../icons/navigation/AboutRouteIcon';
import AddItemRouteIcon from '../icons/navigation/AddItemRouteIcon';
import SearchRouteIcon from '../icons/navigation/SearchRouteIcon';
import ProfileRouteIcon from '../icons/navigation/ProfileRouteIcon';
import MessageRouteIcon from '../icons/navigation/MessageRouteIcon';

import { useEffect, useState } from 'react';
import selectUserUnreadConversations from '@/supabase/models/messaging/selectUserUnreadMessages';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const DesktopNav = () => {
  const pathname = usePathname();
  const supabase = createClientComponentClient();
  const [userId, setUserId] = useState<string>('');
  const [notification, setNotification] = useState<boolean>(false);
  const [trigger, setTrigger] = useState<number>(0);

  useEffect(() => {
    const getUserSession = async () => {
      try {
        const { data: userData } = await supabase.auth.getSession();
        if (userData.session?.user.id) {
          setUserId(userData.session?.user.id);
        }
      } catch (error) {
        console.error('Error getting user session: ', error);
      }
    };
    getUserSession();
  }, []);

  useEffect(() => {
    if (pathname === '/conversations') {
      setNotification(false);
    }
  }, [pathname]);

  useEffect(() => {
    const getUnreadConversations = async () => {
      if (!userId) return;
      const unreadConversations = await selectUserUnreadConversations(userId);
      if (unreadConversations.length > 0) {
        setNotification(true);
      }
    };
    getUnreadConversations();
  }, [userId]);

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
            setTrigger((previous) => previous + 1);
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
            setTrigger((previous) => previous + 1);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [trigger, pathname, userId]);

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
        {notification && (
          <div
            className='absolute right-4 top-3 z-50 h-3 w-3 rounded-full border-2 
              border-green-700 bg-[#54BB89] shadow-lg outline-4 outline-black'
          ></div>
        )}
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
