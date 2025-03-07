import FullHeightContainer from '@/components/layout/FullHeightComponent';

export default async function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FullHeightContainer>
        <main className='flex flex-col'>{children}</main>
      </FullHeightContainer>
    </>
  );
}
