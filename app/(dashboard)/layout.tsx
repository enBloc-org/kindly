import Header from '@/components/Header';
import MobileNavbar from '@/components/MobileNavbar';

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <MobileNavbar />
    </>
  );
}
