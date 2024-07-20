'use client';

import { ReactNode, useEffect, useState } from 'react';

const FullHeightContainer = ({ children }: { children: ReactNode }) => {
  if (typeof window !== 'undefined') {
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
      const handleResize = () => {
        setHeight(window.innerHeight);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const style = {
      height: height + 'px',
      overflow: 'auto',
    };

    return <div style={style}>{children}</div>;
  }
};

export default FullHeightContainer;
