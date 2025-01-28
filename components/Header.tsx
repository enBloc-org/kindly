'use client';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import notificationWatcher from '@/supabase/channels/notificationsWatcher';
import selectUserUnreadConversations from '@/supabase/models/messaging/selectUserUnreadConversations';

// Components
import DesktopNav from './navigation/DesktopNav';
import MobileNavbar from './navigation/MobileNavbar';

export default function Header({ userId }: { userId: string | null }) {
  const pathname = usePathname();
  const [hasNotification, setHasNotification] = useState<boolean>(false);

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
    if (!userId) return;
    notificationWatcher(userId, pathname, setHasNotification);
  }, [hasNotification, pathname, userId]);

  return (
    <header className='flex min-h-[4rem] flex-shrink-0 items-center justify-between bg-monoY px-4 py-2'>
      <div className='block w-full md:hidden'>
        <MobileNavbar userId={userId} hasNotification={hasNotification} />
      </div>
      <div className='hidden w-full md:block'>
        <DesktopNav />
      </div>
    </header>
  );
}
