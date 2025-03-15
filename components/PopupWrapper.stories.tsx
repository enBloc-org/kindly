import type { Meta, StoryObj } from '@storybook/react';
import PopupWrapper from './PopupWrapper';
import ButtonRounded from './buttons/ButtonRounded';

const meta: Meta<typeof PopupWrapper> = {
  title: 'General/PopupWrapper',
  component: PopupWrapper,
};

export default meta;
type story = StoryObj<typeof meta>;

export const PopupWrapperWithEmailConfirmation: story = {
  argTypes: {
    children: {
      options: ['confirmEmail'],
      mapping: {
        confirmEmail: (
          <>
            <h3 className='font-bold'>Verify your email</h3>
            <p>
              Please verify your email by clicking the link set to @gmail.com
            </p>
            <ButtonRounded type='button'>
              Resend verification email
            </ButtonRounded>
          </>
        ),
      },
    },
  },
};
