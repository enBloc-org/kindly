import './globals.css';
import Header from '@/components/Header';
import { headers } from 'next/headers';
import Providers from '@/context/Providers';
import { getProfile } from '@/supabase/models/getProfile';
import DynamicFooter from '@/components/footer/DynamicFooter';
import FullHeightContainer from '@/components/layout/FullHeightComponent';

const defaultUrl = process.env.AWS_AMPLIFY
  ? process.env.AWS_AMPLIFY
  : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Kindly',
  description: 'Give Kindly',
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png'],
  },
  manifest: '/site.webmanifest',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();
  const userId = headersList.get('k-active-user');
  let user = null;
  if (userId) {
    const { data } = await getProfile(userId);
    user = data;
  }
  return (
    <html lang='en'>
      <body>
        <Providers userData={user}>
          <FullHeightContainer>
            <Header />
            {children}
            <DynamicFooter />
          </FullHeightContainer>
        </Providers>
      </body>
    </html>
  );
}
