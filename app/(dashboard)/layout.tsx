import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Providers from '@/context/Providers';
import FullHeightContainer from '@/components/layout/FullHeightComponent';

export default async function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Providers>
        <FullHeightContainer>
          <Header />
          <main className='flex flex-col'>{children}</main>
          <Footer />
        </FullHeightContainer>
      </Providers>
    </>
  );
}
