'use client';
import ButtonPill from '@/components/ButtonPill';
import ButtonRounded from '@/components/ButtonRounded';
import React from 'react';

const LandingPage = () => {
  const clickHandler = () => {
    console.log('hi');
  };

  return (
    <div className='m-16'>
      <ButtonRounded clickHandler={clickHandler}>Click me</ButtonRounded>
    </div>
  );
};

export default LandingPage;
