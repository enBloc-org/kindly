export default async function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className='flex flex-col'>{children}</main>
    </>
  );
}
