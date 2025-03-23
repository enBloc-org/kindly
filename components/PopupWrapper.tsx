'use client';
import { useState } from 'react';
import { ReactNode } from 'react';

/**
 *
 * @summary This component will wrap any children in a single column grid at evenly spaced intervals.
 * 
 * The wrapper will be displayed absolutely on the page.

 * Clicking the close button will unmount the component entirely.
 */
export default function PopupWrapper({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const wrapperStyling: string = `
    grid-col-1 
    grid 
    h-[198px] 
    w-[358px]
    lg:w-[529px]
    lg:h-[326px] 
    grid-flow-row 
    items-center
    rounded-md 
    bg-monoY 
    px-[16px] 
    text-center
    place-items-between
    [&>*:not(.close-button)]:col-span-full
    [&>*:not(.close-button)]:row-span-1
    absolute
    left-[50%]
    -translate-x-[50%]
    top-[50%]
    -translate-y-[50%]
    z-30
  `;

  if (!isOpen) return null;

  return (
    <>
      <div className='absolute left-0 top-0 z-20 m-0 h-screen w-screen bg-primaryGray opacity-[75%]' />
      <div className={wrapperStyling}>
        <button
          type='button'
          className='close-button h-10px w-10px z-30 col-[2] row-[1] -m-3 cursor-pointer'
          onClick={() => setIsOpen((current) => !current)}
        >
          <svg
            width='15'
            height='15'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M5.46983 5.46995C5.61045 5.3295 5.80108 5.25061 5.99983 5.25061C6.19858 5.25061 6.3892 5.3295 6.52983 5.46995L18.5298 17.4699C18.6035 17.5386 18.6626 17.6214 18.7036 17.7134C18.7446 17.8054 18.7666 17.9047 18.7684 18.0054C18.7702 18.1061 18.7517 18.2062 18.714 18.2995C18.6762 18.3929 18.6201 18.4778 18.5489 18.549C18.4776 18.6202 18.3928 18.6764 18.2994 18.7141C18.206 18.7518 18.106 18.7703 18.0053 18.7685C17.9046 18.7668 17.8053 18.7447 17.7133 18.7037C17.6213 18.6627 17.5385 18.6036 17.4698 18.53L5.46983 6.52995C5.32938 6.38933 5.25049 6.1987 5.25049 5.99995C5.25049 5.8012 5.32938 5.61058 5.46983 5.46995Z'
              fill='#333333'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M18.5298 5.46995C18.6703 5.61058 18.7492 5.8012 18.7492 5.99995C18.7492 6.1987 18.6703 6.38933 18.5298 6.52995L6.52985 18.53C6.38767 18.6624 6.19963 18.7346 6.00532 18.7311C5.81102 18.7277 5.62564 18.649 5.48822 18.5116C5.35081 18.3742 5.2721 18.1888 5.26867 17.9945C5.26524 17.8002 5.33737 17.6121 5.46985 17.4699L17.4698 5.46995C17.6105 5.3295 17.8011 5.25061 17.9998 5.25061C18.1986 5.25061 18.3892 5.3295 18.5298 5.46995Z'
              fill='#333333'
            />
          </svg>
        </button>
        {children}
      </div>
    </>
  );
}
