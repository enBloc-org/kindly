'use client';
import { useState, useEffect, ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  const [containerHeight, setContainerHeight] = useState(`auto`);

  useEffect(() => {
    const calculateHeight = () => {
      setContainerHeight(`${window.innerHeight}px`);
    };

    calculateHeight();
    window.addEventListener('resize', calculateHeight);

    return () => {
      window.removeEventListener('resize', calculateHeight);
    };
  }, []);
  return (
    <div className='flex flex-col' style={{ height: containerHeight }}>
      {children}
    </div>
  );
};

export default Container;
