/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>What do we do?</h1>
      <div>
        Welcome to KINDLY, the giving platform where compassion meets
        sustainability! Please help us in our mission supplying clothes and
        other personal items to Ukrainian refugees. By donating you won’t just
        be providing warmth and dignity to people in need, you’ll be
        contributing to a greener planet too! The KINDLY team are asking for
        donations of clothes and shoes (adults and kids sizes) as well as books,
        toys, and household items. We encourage you to share what you can spare,
        declutter your life, and work toward a more mindful and eco-conscious
        future. Together, let's weave a tapestry of kindness and sustainability!
      </div>
      <h1>Blog</h1>
      <div>
        Hello and welcome! We’re very excited to be launching KINDLY, a platform
        which lets you donate unwanted items to Ukrainian refugees. In the
        future we hope to expand KINDLY to serve the wider refugee community.
        KINDLY is a sister project to{' '}
        <Link href='https://linktr.ee/trafalgargirls'>Trafalgar Girls</Link>, a
        volunteer initiative that’s helped thousands of Ukrainian refugees since
        the war began in February 2022. The KINDLY site was created through the{' '}
        <Link href='https://www.foundersandcoders.com/tech-for-better/'>
          Tech for Better programme
        </Link>
        by Founders and Coders. So let the KINDLY journey begin! Do you have
        unwanted clothes or shoes (adults and kids sizes), toys, books, or
        household items? Upload the details to KINDLY, spread some kindness, and
        help the planet! Thank you KINDLY{' '}
      </div>
    </div>
  );
};

export default HomePage;
