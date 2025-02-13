type ThreadsIconProps = {
  className: string;
};
const ThreadsIcon: React.FC<ThreadsIconProps> = ({ className }) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <g clipPath='url(#clip0)'>
        <path
          d='M18.75 7.61294C17.7994 5.14169 15.8034 3.33325 12 3.33325C6 3.33325 4.5 7.83325 4.5 12.3333C4.5 16.8333 6 21.3333 12 21.3333C16.5 21.3333 18.75 18.3333 18.75 16.0833C18.75 10.0833 9 10.0833 9 14.5833C9 18.3333 15.75 18.3333 15.75 12.3333C15.75 7.08325 10.5 7.08325 9 9.33325'
          stroke='#333333'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  );
};

export default ThreadsIcon;
