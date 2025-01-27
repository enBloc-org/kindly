'use client';
import { ReactNode } from 'react';

interface MainButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  clickHandler: () => void;
  size: 'small' | 'large';
  variant: 'primary' | 'secondary';
  type: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  ariaLabel?: string;
}

/**
 * MainButton Component
 *
 * @component
 * @example
 * <MainButton
 *   layout="desktop"
 *   size="small"
 *   colour="primary"
 *   disabled={isLoading}
 *   type="submit"
 *   ariaLabel="Submit button"
 *   clickHandler={() => console.log('clicked')}
 * >
 *   Click Me
 * </MainButton>
 */

const MainButton: React.FC<MainButtonProps> = ({
  children,
  clickHandler,
  size = 'small',
  variant = 'primary',
  type = 'button',
  disabled,
  ariaLabel,
  ...restProps
}) => {
  const baseStyles =
    'flex items-center justify-center font-medium py-3 min-h-[44px] min-w-[44px] rounded-md';

  const sizeStyles = {
    small: 'w-[163px] text-md',
    large: 'w-[255px] text-xl',
  };

  const colourStyles = {
    primary:
      'bg-brand-100 text-monoY hover:bg-secondaryOrange hover:text-primaryBlack focus:bg-brand-110 focus:text-monoY',
    secondary: 'border border-base-120 hover:border-brand-100',
  };

  const disabledStyles =
    'bg-base-80 text-base-100 cursor-not-allowed hover:bg-base-80 hover:text-base-100';

  const className = `
    ${baseStyles}
    ${sizeStyles[size]}
    ${colourStyles[variant]}
    ${disabled ? disabledStyles : ''}`;

  return (
    <button
      onClick={clickHandler}
      className={className}
      type={type}
      disabled={disabled}
      aria-disabled={disabled}
      aria-label={ariaLabel}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default MainButton;
