import { PartialItem } from '@/types/types';

const PostageOptionDisplay: React.FC<PartialItem> = ({
  collectible,
  postable,
  postage_covered,
}) => {
  return (
    <div className='flex gap-5 text-lg font-semibold'>
      <div className='flex gap-3'>
        <p>Pick up</p>
        {collectible && (
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='30'
              viewBox='0 0 24 24'
            >
              <path
                fill='none'
                stroke='#54BB89'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2.5'
                d='M20 7L10 17l-5-5'
              />
            </svg>
          </span>
        )}
      </div>

      <div className='flex justify-around gap-3'>
        <p>Post</p>
        {postable && (
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='30'
              viewBox='0 0 24 24'
            >
              <path
                fill='none'
                stroke='#54BB89'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2.5'
                d='M20 7L10 17l-5-5'
              />
            </svg>
          </span>
        )}
      </div>

      <div className='flex gap-3'>
        <p>Paid</p>
        {postage_covered && (
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='30'
              viewBox='0 0 24 24'
            >
              <path
                fill='none'
                stroke='#54BB89'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2.5'
                d='M20 7L10 17l-5-5'
              />
            </svg>
          </span>
        )}
      </div>
    </div>
  );
};

export default PostageOptionDisplay;
