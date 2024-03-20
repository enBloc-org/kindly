import Link from 'next/link';
import { ReactNode } from 'react';

type MobileLinkContainerProps = {
  href: string;
  ariaLabel: string;
  pathName: string;
  children: ReactNode;
};

const MobileLinkContainer: React.FC<MobileLinkContainerProps> = ({
  href,
  ariaLabel,
  pathName,
  children,
}) => {
  return (
    <Link href={href} aria-label={ariaLabel}>
      <div
        className={`flex items-center rounded-full border-4 p-1 ${
          pathName === href
            ? 'border-primaryOrange bg-backgroundHighlight'
            : 'border-primaryGreen'
        }`}
      >
        {children}
      </div>
    </Link>
  );
};

export default MobileLinkContainer;
