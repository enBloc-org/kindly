type TickIconProps = {
  read: boolean;
};

const TickIcon: React.FC<TickIconProps> = ({ read }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <path
        fill={read ? '#FF9E5E' : 'currentColor'}
        d='M19.78 2.2L24 6.42L8.44 22L0 13.55l4.22-4.22l4.22 4.22zm0 2.8L8.44 16.36l-4.22-4.17l-1.41 1.36l5.63 5.62L21.19 6.42z'
      />
    </svg>
  );
};

export default TickIcon;
