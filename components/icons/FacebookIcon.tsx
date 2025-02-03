type FacebookIconProps = {
  width: number;
  height: number;
  className: string;
};

const FacebookIcon: React.FC<FacebookIconProps> = ({
  width = 24,
  height = 25,
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <g clipPath='url(#clip0_376_2733)'>
        <path
          d='M12 21.3333C16.9706 21.3333 21 17.3038 21 12.3333C21 7.36269 16.9706 3.33325 12 3.33325C7.02944 3.33325 3 7.36269 3 12.3333C3 17.3038 7.02944 21.3333 12 21.3333Z'
          stroke='#333333'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M15.75 8.58325H14.25C13.6533 8.58325 13.081 8.8203 12.659 9.24226C12.2371 9.66422 12 10.2365 12 10.8333V21.3333'
          stroke='#333333'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M9 13.8333H15'
          stroke='#333333'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_376_2733'>
          <rect
            width={width}
            height={height}
            fill='white'
            transform='translate(0 0.333252)'
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default FacebookIcon;
