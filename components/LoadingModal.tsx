'use client';

import React, { useEffect, useState } from 'react';

/**
 * @description Displays 'Loading...' message while data is being fetched.
 * @param data - Add fetched data to check loading state.
 * @param message - Add a custom message to display if no data is present.
 */
export default function LoadingModal<T>({
  data,
  children,
  message,
}: {
  data: T;
  children: React.ReactElement;
  message: string;
}) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(!data);
  }, [data]);

  if (loading) {
    return <p className='text-center'>Loading...</p>;
  }

  if (!data) {
    return <p className='text-center'>{message}</p>;
  }

  return children;
}
