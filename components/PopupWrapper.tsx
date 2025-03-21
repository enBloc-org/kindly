import { ReactNode } from 'react';

/**
 *
 * @summary This component will wrap any children in a single column grid at evenly spaced intervals.
 * The wrapper will be displayed absolutely on the page.
 * @param children - accepts any components or html elements to be rendered in a popup
 * @returns
 */
export default function PopupWrapper({ children }: { children: ReactNode }) {
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
    [&>*]:col-span-full
    [&>*]:row-span-1
  `;

  return (
    <div className={wrapperStyling}>
      <button
        type='button'
        className='align-self-start h-5px w-5px right-[1px] top-[3px] z-30 -mb-[10px] -ml-[10px] cursor-pointer justify-self-end'
      >
        x
      </button>
      {children}
    </div>
  );
}
