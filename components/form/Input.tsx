'use client';
import React, { useState } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  className?: string;
}

/**
 * Input Component
 *
 * A reusable input component for forms with built-in support for labels, errors, and password visibility toggling.
 *
 * @component
 * @example
 * <Input
 *   label="Password"
 *   type="password"
 *   id="confirmPassword"
 *   name="password"
 *   placeholder="Enter password"
 *   autoComplete="current-password"
 *   onChange={(e) => setPassword(e.target.value)}
 *   required
 * />
 *
 * @param {string} label - The label for the input field.
 * @param {string} [props.type="text"] - The type of input (e.g., "text", "password", "email").
 * @param {string} [props.id] - The unique identifier for the input field.
 * @param {string} [props.name] - The name of the input field (useful for form submission).
 * @param {string} [props.placeholder] - Placeholder text inside the input field.
 * @param {boolean} [props.required] - Whether the input is required.
 * @param {string} [props.error] - Error message to display if validation fails.
 * @param {string} [props.className] - Additional custom styles for the input.
 * @param {React.ChangeEventHandler<HTMLInputElement>} [props.onChange] - Function to handle input changes.
 */

const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  error,
  className = '',
  id,
  required,
  ...props
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const generatedId =
    id || `input-${(label || 'input').replace(/\s+/g, '-').toLowerCase()}`;

  const baseStyles = `bg-base-80 border rounded-md px-3 py-2 font-normal text-base-100 
    placeholder-base-100 focus:outline-none transition-all`;

  const sizeStyles = `w-full min-h-[48px] sm:min-h-[40px] min-w-[358px] sm:min-w-[340px]`;

  const stateStyles = `hover:border-base-100 focus:border-base-100
    disabled:bg-base-80 disabled:border-base-100 
    disabled:cursor-not-allowed disabled:opacity-30`;

  const errorStyles = error ? 'border-error-90' : 'border border-transparent';

  return (
    <div className='relative flex flex-col gap-2'>
      <label htmlFor={generatedId} className='font-normal text-base-110'>
        {label} {required && <span className='text-error-90'>*</span>}
      </label>

      <div className='relative'>
        <input
          id={generatedId}
          className={`${baseStyles} ${sizeStyles} ${stateStyles} ${errorStyles} ${className}`}
          {...props}
          type={type === 'password' && isPasswordVisible ? 'text' : type}
        />

        {type === 'password' && (
          <button
            type='button'
            className='absolute right-3 top-1/2 -translate-y-1/2'
            onClick={() => setIsPasswordVisible((prev) => !prev)}
          >
            <img
              src={isPasswordVisible ? '/icons/eye-off.png' : '/icons/eye.png'}
              alt='Toggle password visibility'
            />
          </button>
        )}
      </div>

      {error?.trim() && <span className='text-xs text-error-90'>{error}</span>}
    </div>
  );
};

export default Input;
