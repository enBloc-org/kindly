import Header from '@/components/Header';
import MobileNavbar from '@/components/MobileNavbar';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export default async function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();
  if (!data.session) {
    redirect('/login');
  }
  return (
    <>
      <Header />
      <main>
        <div className='min-h-screen'>{children}</div>
      </main>
      <MobileNavbar />
    </>
  );
}
