import Header from '@/components/Header';
import { redirect } from 'next/navigation';
import Footer from '@/components/Footer';
import Providers from '@/context/Providers';
import newServerClient from '@/supabase/utils/newServerClient';
import Container from '@/components/layout/Container';

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
        <Container>
          <Header />
          <main className='flex flex-grow flex-col'>{children}</main>
          <Footer />
        </Container>
      </Providers>
    </>
  );
}
