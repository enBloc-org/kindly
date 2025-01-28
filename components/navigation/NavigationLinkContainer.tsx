import Link from 'next/link';
import { ReactNode } from 'react';

type NavigationLinkContainerProps = {
  href: string;
  ariaLabel: string;
  children: ReactNode;
};

const NavigationLinkContainer: React.FC<NavigationLinkContainerProps> = ({
  href,
  ariaLabel,
  children,
}) => {
  return (
    <Link href={href} aria-label={ariaLabel}>
      <div className={`relative flex flex-col items-center justify-center`}>
        {children}
      </div>
    </Link>
  );
};

export default NavigationLinkContainer;
