import type { Meta, StoryObj } from '@storybook/react';
import PopupWrapper from './PopupWrapper';

const meta: Meta<typeof PopupWrapper> = {
  title: 'General/PopupWrapper',
  component: PopupWrapper,
};

export default meta;
type story = StoryObj<typeof meta>;

export const PopupWrapperWithChildren: story = {
  args: {
    children: 'confirmEmail',
  },

  argTypes: {
    children: {
      options: ['confirmEmail', 'resetPassword'],
      mapping: {
        confirmEmail: (
          <>
            <h3 className='font-bold'>Verify your email</h3>
            <p>
              Please verify your email by clicking the link set to{' '}
              <span className='text-primaryOrange'>@gmail.com</span>
            </p>
            <button
              type='button'
              className='rounded-md bg-primaryOrange p-[5px] text-monoY'
            >
              Resend verification email
            </button>
          </>
        ),
        resetPassword: (
          <>
            <h3 className='font-bold'>Reset your password</h3>
            <p>
              Enter your email address and we will send you the reset password
              link
            </p>
            <input
              type='email'
              className='rounded-md bg-secondaryGray p-[4px]'
              placeholder='Email'
            ></input>
            <button
              type='button'
              className='rounded-md bg-primaryOrange p-[5px] text-monoY'
            >
              Confirm
            </button>
          </>
        ),
      },
    },
  },
};
