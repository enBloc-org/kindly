import { IconPropType } from '../filter/QuickBrowse';

const WomanIcon: React.FC<IconPropType> = ({ subcategory }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='50'
      height='50'
      viewBox='0 0 64 64'
    >
      <path
        fill={subcategory === 'women' ? '#FF9E5E' : 'currentColor'}
        d='M44.84 6.532S43.699 2 32 2C13.889 2 4 13.45 4 28.529V62h28c-8.088 0-21.633-11.662-21.633-21.332c0 0-4.367-1.107-4.367-7.516c0-5.074 3.293-5.945 3.293-5.945C21.096 27.207 43 12 43 12s4.59 13.426 11.604 15.207c0 0 3.396.621 3.396 5.945c0 6.408-4.531 7.516-4.531 7.516C53.408 50.338 40.092 62 32 62h28V28.529C60 6.115 44.84 6.532 44.84 6.532z'
      />
      <path
        fill={subcategory === 'women' ? '#FF9E5E' : 'currentColor'}
        d='M32 47c4.18-.002 6.27-3 4.18-3h-8.361c-2.09 0-.001 3 4.181 3m16.5-13.5a4.455 4.455 0 0 0-1.121-2.941c.768.111 1.525.24 2.264.334c.629.184 1.252.381 1.852.611c.105.357.102.875-.01 1.375a10.712 10.712 0 0 1-.596 1.861A17.336 17.336 0 0 1 50 36.551c-.168.295-.34.586-.535.863c-.199.27-.383.574-.686.738c.678-.229 1.148-.814 1.621-1.316c.455-.535.879-1.102 1.24-1.713s.697-1.248.916-1.963c.18-.645.379-1.383.105-2.221c.861-.146 1.652-.479 2.338-1.123c-4.5 1.955-15.75-7.181-18 6.521c.797-2.023 1.738-3.393 2.768-4.313A4.459 4.459 0 0 0 39.5 33.5a4.5 4.5 0 0 0 9 0m-24 0c0-.52-.105-1.012-.27-1.475c1.031.92 1.971 2.289 2.77 4.313c-2.25-13.703-13.5-4.566-18-6.521c.686.645 1.477.977 2.338 1.123c-.275.838-.074 1.576.105 2.221c.219.715.553 1.352.914 1.963a12.54 12.54 0 0 0 1.24 1.713c.475.502.945 1.088 1.623 1.316c-.305-.164-.486-.469-.686-.738a10.075 10.075 0 0 1-.535-.863a16.855 16.855 0 0 1-.889-1.811a10.896 10.896 0 0 1-.598-1.861c-.109-.5-.115-1.018-.008-1.375a21.997 21.997 0 0 1 1.834-.607c.742-.096 1.508-.225 2.279-.338A4.468 4.468 0 0 0 15.5 33.5a4.5 4.5 0 1 0 9 0m11.445 16.615C33 49 32 50.771 32 50.771s-1-1.771-3.945-.656c-2.301.871-6.068.355-6.055.359c6 8.525 14 8.525 20 0c.014-.003-3.754.512-6.055-.359'
      />
    </svg>
  );
};

export default WomanIcon;