'use client';
import { usePathname } from 'next/navigation';

// Components
import NavigationLinkContainer from './NavigationLinkContainer';
import HomeRouteIcon from '../icons/navigation/HomeRouteIcon';
import SearchRouteIcon from '../icons/navigation/SearchRouteIcon';
import AboutRouteIcon from '../icons/navigation/AboutRouteIcon';
import AddItemRouteIcon from '../icons/navigation/AddItemRouteIcon';
import MessageRouteIcon from '../icons/navigation/MessageRouteIcon';

import { useEffect, useState } from 'react';
import newClient from '@/supabase/utils/newClient';
import selectUserUnreadConversations from '@/supabase/models/messaging/selectUserUnreadMessages';

type DesktopNavProps = {
  userId: string;
};

const MobileNavbar = ({ userId }: DesktopNavProps) => {
  const pathname = usePathname();
  const supabase = newClient();
  const [notification, setNotification] = useState<boolean>(false);
  const [trigger, setTrigger] = useState<number>(0);

  useEffect(() => {
    if (pathname === '/conversations') {
      setNotification(false);
    }
  }, [pathname]);

  useEffect(() => {
    const getUnreadConversations = async () => {
      const unreadConversations = await selectUserUnreadConversations(userId);
      if (unreadConversations.length > 0) {
        setNotification(true);
      }
    };
    getUnreadConversations();
  }, []);

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
            setNotification(true);
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
            setNotification(true);
            setTrigger((previous) => previous + 1);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [trigger]);

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
          <div
            className='absolute right-1 top-1 z-50 h-3 w-3 rounded-full border-2 
              border-green-700 bg-[#54BB89] shadow-lg outline-4 outline-black'
          ></div>
        )}
      </NavigationLinkContainer>
    </nav>
  );
};

export default MobileNavbar;
