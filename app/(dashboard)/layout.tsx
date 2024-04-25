import Header from '@/components/Header';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import Footer from '@/components/Footer';
import { LayoutProvider } from '@/context/LayoutContext';

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
      <LayoutProvider>
        <Header />
        <main>{children}</main>
        <Footer />
      </LayoutProvider>
    </>
  );
}
