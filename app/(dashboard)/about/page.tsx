import React from 'react';
import Link from 'next/link';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaSquareThreads } from 'react-icons/fa6';
import { FaTwitter } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div>
      <h1>About</h1>
      <div>
        KINDLY is a platform that lets you donate unwanted items to Ukrainian
        refugees. Donors can upload unwanted clothes, shoes, toys, books and
        household items. Your generous contributions will help adults and
        children who’ve fled the war in Ukraine. In the future we hope to expand
        KINDLY to serve the wider refugee community. KINDLY is a sister project
        to <Link href='https://linktr.ee/trafalgargirls'>Trafalgar Girls</Link>,
        a volunteer initiative that’s helped thousands of Ukrainian refugees
        since the war began in February 2022. The KINDLY site was created
        through the
        <Link href='https://www.foundersandcoders.com/tech-for-better/'>
          Tech for Better programme
        </Link>{' '}
        by Founders and Coders. You can contact KINDLY via email (xxx insert
        email when available) Follow the KINDLY journey on Instagram, Facebook,
        Threads (icons, hyperlinks will be available at later date xxx){' '}
        <div>
          <Link href=''>
            <FaInstagramSquare />
          </Link>
          <Link href=''>
            <FaSquareThreads />
          </Link>
          <Link href=''>
            <FaTwitter />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
