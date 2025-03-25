'use client';

import { usePathname } from 'next/navigation';
import Footer from '@/components/footer/Footer';

export default function DynamicFooter() {
  const pathname = usePathname();
  if (pathname === '/conversations') return null;
  return <Footer />;
}
