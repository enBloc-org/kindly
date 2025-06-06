import { NavigationIconType } from './NavigationIconType';

const MessageRouteIcon: React.FC<NavigationIconType> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 42 42'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M10 30.5787L11.5887 25.8127C10.2156 23.782 9.71892 21.3771 10.1909 19.0453C10.6629 16.7135 12.0715 14.6134 14.1547 13.1355C16.2379 11.6575 18.8541 10.9023 21.5167 11.0103C24.1793 11.1182 26.7073 12.082 28.6305 13.7224C30.5537 15.3628 31.7413 17.5682 31.9725 19.9285C32.2037 22.2888 31.4628 24.6435 29.8875 26.5546C28.3122 28.4658 26.0097 29.8034 23.4081 30.3188C20.8065 30.8342 18.0829 30.4923 15.7436 29.3566L10 30.5787'
        stroke='#333333'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M20.9985 20.8027V20.8144'
        stroke='#333333'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M16.1104 20.8027V20.8144'
        stroke='#333333'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M25.8867 20.8027V20.8144'
        stroke='#333333'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default MessageRouteIcon;
