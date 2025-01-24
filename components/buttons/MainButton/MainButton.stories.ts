import { expect, jest } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import MainButton from './MainButton';
import { userEvent, within } from '@storybook/test';

const meta: Meta<typeof MainButton> = {
  title: 'components/MainButton',
  component: MainButton,
  args: {
    children: 'Donate Item',
    clickHandler: jest.fn(),
    type: 'button',
    disabled: false,
  },
  argTypes: {
    layout: {
      description: 'The display layout of the button',
      options: ['desktop', 'mobile'],
      control: { type: 'radio' },
      table: {
        type: { summary: '"desktop" | "mobile"' },
        defaultValue: { summary: 'desktop' },
      },
    },
    size: {
      description: 'The size of the button',
      options: ['small', 'large'],
      control: { type: 'radio' },
      table: {
        type: { summary: '"small" | "large"' },
        defaultValue: { summary: 'small' },
      },
    },
    variant: {
      description: 'Whether to use light mode styling',
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
      table: {
        type: { summary: 'boolean' },
      },
    },
    disabled: {
      description: 'Whether the button is disabled',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
      },
    },
    type: {
      description: 'The HTML button type',
      options: ['button', 'submit', 'reset'],
      control: { type: 'radio' },
      table: {
        type: { summary: '"button" | "submit" | "reset"' },
        defaultValue: { summary: 'button' },
      },
    },
    clickHandler: {
      description: 'Function to be called when the button is clicked',
      table: {
        type: { summary: '() => void' },
      },
    },
    children: {
      description: 'The content to be displayed inside the button',
      control: 'text',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const MainButtonDefault: Story = {
  args: {
    layout: 'desktop',
    size: 'small',
    variant: 'primary',
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();

    await userEvent.click(button);
    expect(args.clickHandler).toHaveBeenCalled();
  },
};

export const LargeDesktopButton: Story = {
  args: {
    ...MainButtonDefault.args,
    size: 'large',
    layout: 'desktop',
    children: 'Large Button',
  },
};

export const SmallDesktopButton: Story = {
  args: {
    ...MainButtonDefault.args,
    size: 'small',
    layout: 'desktop',
    children: 'Small Button',
  },
};

export const MobileSmallButton: Story = {
  args: {
    ...MainButtonDefault.args,
    layout: 'mobile',
    size: 'small',
    children: 'Mobile Button',
  },
};

export const MobileLargeButton: Story = {
  args: {
    ...MainButtonDefault.args,
    size: 'large',
    layout: 'mobile',
    children: 'Large Button',
  },
};

export const SecondaryButton: Story = {
  args: {
    ...MainButtonDefault.args,
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const DisabledButton: Story = {
  args: {
    ...MainButtonDefault.args,
    disabled: true,
    children: 'Disabled Button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  },
};
