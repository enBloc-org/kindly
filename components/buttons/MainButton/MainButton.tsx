'use client';
import { ReactNode } from 'react';

interface MainButtonProps {
  children: ReactNode;
  clickHandler: () => void;
  variant: 'mobile' | 'desktop';
  size: 'small' | 'large';
  colour: 'primary' | 'secondary' | 'tertiary';
  lightMode: boolean;
  type: 'button' | 'submit' | 'reset';
  disabled: boolean;
  ariaLabel?: string;
}

/**
 * MainButton Component
 *
 * @component
 * @example
 * <KindlyButton
 *   variant="desktop"
 *   size="small"
 *   colour="primary"
 * disabled={isLoading}
 * type="submit"
 * ariaLabel="Submit button"
 *   clickHandler={() => console.log('clicked')}
 * >
 *   Click Me
 * </KindlyButton>
 */

const MainButton: React.FC<MainButtonProps> = ({
  children,
  clickHandler,
  variant = 'desktop',
  size = 'small',
  colour = 'primary',
  lightMode = false,
  type = 'button',
  disabled,
  ariaLabel,
}) => {
  const baseStyles =
    'flex items-center justify-center font-medium py-3 min-h-[44px] min-w-[44px] rounded-md';

  const variantStyles = {
    mobile: 'text-xl',
    desktop: 'text-md',
  };

  const sizeStyles = {
    small: 'w-[163px]',
    large: 'w-[255px]',
  };

  const colourStyles = {
    primary: lightMode
      ? 'border border-primaryBlack'
      : 'bg-primaryOrange text-primaryWhite',
    secondary: lightMode
      ? 'border border-primaryBlack text-primaryGrey'
      : 'bg-secondaryOrange text-primaryBlack',
    tertiary: lightMode
      ? 'border border-primaryBlack text-primaryOrange'
      : 'bg-tertiaryOrange text-primaryWhite',
  };

  const disabledStyles = 'opacity-70 cursor-not-allowed';

  const className = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${colourStyles[colour]}
    ${disabled ? disabledStyles : ''}`;

  return (
    <button
      onClick={clickHandler}
      className={className}
      type={type}
      disabled={disabled}
      aria-disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default MainButton;
