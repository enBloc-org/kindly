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
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();

    await userEvent.click(button);
    expect(args.clickHandler).toHaveBeenCalled();
  },
  argTypes: {
    variant: {
      description: 'The display variant of the button',
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
    colour: {
      description: 'The color scheme of the button',
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'radio' },
      table: {
        type: { summary: '"primary" | "secondary" | "tertiary"' },
        defaultValue: { summary: 'primary' },
      },
    },
    lightMode: {
      description: 'Whether to use light mode styling',
      control: 'boolean',
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
    variant: 'desktop',
    size: 'small',
    colour: 'primary',
    lightMode: false,
  },
};

export const LargeDesktopButton: Story = {
  args: {
    size: 'large',
    variant: 'desktop',
    children: 'Large Button',
  },
};

export const SmallDesktopButton: Story = {
  args: {
    size: 'small',
    variant: 'desktop',
    children: 'Small Button',
  },
};

export const MobileSmallButton: Story = {
  args: {
    ...MainButtonDefault.args,
    variant: 'mobile',
    size: 'small',
    children: 'Mobile Button',
  },
};

export const MobileLargeButton: Story = {
  args: {
    size: 'large',
    variant: 'mobile',
    children: 'Large Button',
  },
};

export const SecondaryButton: Story = {
  args: {
    ...MainButtonDefault.args,
    colour: 'secondary',
    children: 'Secondary Button',
  },
};

export const TertiaryButton: Story = {
  args: {
    ...MainButtonDefault.args,
    colour: 'tertiary',
    children: 'Tertiary Button',
  },
};

export const LightModeButton: Story = {
  args: {
    ...MainButtonDefault.args,
    lightMode: true,
    children: 'Light Mode',
  },
};

export const DisabledButton: Story = {
  args: {
    ...MainButtonDefault.args,
    disabled: true,
    children: 'Disabled Button',
  },
};
