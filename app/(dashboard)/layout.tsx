import Header from '@/components/Header';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import Footer from '@/components/Footer';
import Providers from '@/context/Providers';
import FullHeightContainer from '@/components/layout/FullHeightComponent';

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
      <Providers>
        <FullHeightContainer>
          <Header userId={data.session.user.id} />
          <main className='flex flex-grow flex-col'>{children}</main>
          <Footer userId={data.session.user.id} />
        </FullHeightContainer>
      </Providers>
    </>
  );
}
