type MeatballIconProps = {
  width: number;
  height: number;
};
const MeatballIcon: React.FC<MeatballIconProps> = ({ width, height }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 16 16'
    >
      <g
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      >
        <circle cx='2.5' cy='8' r='.75' />
        <circle cx='8' cy='8' r='.75' />
        <circle cx='13.5' cy='8' r='.75' />
      </g>
    </svg>
  );
};

export default MeatballIcon;
