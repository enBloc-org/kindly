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
          <main className='flex flex-col'>{children}</main>
        </FullHeightContainer>
      </Providers>
    </>
  );
}
