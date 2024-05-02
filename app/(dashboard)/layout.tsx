import Header from '@/components/Header';
import { redirect } from 'next/navigation';
import Footer from '@/components/Footer';
import Providers from '@/context/Providers';
import newServerClient from '@/supabase/utils/newServerClient';

export default async function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = newServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    redirect('/login');
  }
  return (
    <>
      <Providers>
        <div className='flex min-h-screen flex-col'>
          <Header />
          <main className='flex-grow'>{children}</main>
          <Footer />
        </div>
      </Providers>
    </>
  );
}
