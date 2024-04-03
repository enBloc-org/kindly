import Link from 'next/link';
import { ReactNode } from 'react';

type NavigationLinkContainerProps = {
  href: string;
  ariaLabel: string;
  pathName: string;
  children: ReactNode;
  size: 'mobile' | 'desktop';
};

const NavigationLinkContainer: React.FC<NavigationLinkContainerProps> = ({
  href,
  ariaLabel,
  pathName,
  children,
  size,
}) => {
  return (
    <Link href={href} aria-label={ariaLabel}>
      <div
        className={`flex flex-col items-center justify-center ${
          size === 'mobile'
            ? pathName === href
              ? 'rounded-full border-4 border-primaryOrange bg-backgroundHighlight p-1'
              : 'rounded-full border-4 border-primaryGreen p-1'
            : pathName === href
              ? ' rounded-lg bg-backgroundHighlight p-2'
              : 'rounded-lg p-2'
        }`}
      >
        {children}
      </div>
    </Link>
  );
};

export default NavigationLinkContainer;
