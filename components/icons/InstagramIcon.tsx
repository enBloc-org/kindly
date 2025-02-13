type InstagramIconProps = {
  className: string;
};

const InstagramIcon: React.FC<InstagramIconProps> = ({ className }) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <g clipPath='url(#clip0)'>
        <path
          d='M12 16.0833C14.0711 16.0833 15.75 14.4043 15.75 12.3333C15.75 10.2622 14.0711 8.58325 12 8.58325C9.92893 8.58325 8.25 10.2622 8.25 12.3333C8.25 14.4043 9.92893 16.0833 12 16.0833Z'
          stroke='#333333'
          strokeWidth='2'
          strokeMiterlimit='10'
        />
        <path
          d='M16.5 3.33325H7.5C5.01472 3.33325 3 5.34797 3 7.83325V16.8333C3 19.3185 5.01472 21.3333 7.5 21.3333H16.5C18.9853 21.3333 21 19.3185 21 16.8333V7.83325C21 5.34797 18.9853 3.33325 16.5 3.33325Z'
          stroke='#333333'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  );
};

export default InstagramIcon;
