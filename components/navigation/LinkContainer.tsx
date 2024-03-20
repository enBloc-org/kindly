import Link from 'next/link';
import { ReactNode } from 'react';

type LinkContainerProps = {
  href: string;
  ariaLabel: string;
  pathName: string;
  children: ReactNode;
};

const LinkContainer: React.FC<LinkContainerProps> = ({
  href,
  ariaLabel,
  pathName,
  children,
}) => {
  return (
    <Link href={href} aria-label={ariaLabel}>
      <div
        className={`flex flex-col items-center gap-1 rounded-lg p-2 ${
          pathName === href ? ' bg-backgroundHighlight' : ''
        }`}
      >
        {children}
      </div>
    </Link>
  );
};

export default LinkContainer;
