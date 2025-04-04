import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';
import { userEvent, within } from '@storybook/test';

const meta: Meta<typeof Input> = {
  title: 'components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Text label shown above the input',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    type: {
      description: 'The HTML input type',
      control: 'text',
      table: {
        type: { summary: '"text" | "email" | "password" | etc.' },
        defaultValue: { summary: 'text' },
      },
    },
    placeholder: {
      description: 'Placeholder text',
      control: 'text',
    },
    required: {
      description: 'Whether the input is required',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
      },
    },
    error: {
      description: 'Optional error message shown below input',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      description: 'Whether the input is disabled',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
      },
    },
    className: {
      description: 'Optional className to override styles',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const DefaultInput: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
    required: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText(
      'Enter your email'
    ) as HTMLInputElement;

    expect(input).toBeInTheDocument();
    await userEvent.type(input, 'test@example.com');
    expect(input.value).toBe('test@example.com');
  },
};

export const PasswordInput: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
    required: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    const input = canvas.getByPlaceholderText(
      'Enter password'
    ) as HTMLInputElement;

    expect(input.type).toBe('password');
    await userEvent.click(button);
    expect(input.type).toBe('text');
  },
};

export const ErrorState: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
    error: 'Invalid email',
    required: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const error = canvas.getByText('Invalid email');
    expect(error).toBeVisible();
  },
};

export const DisabledInput: Story = {
  args: {
    label: 'Disabled Field',
    type: 'text',
    placeholder: "Can't type here...",
    disabled: true,
  },
};

export const WithCustomClass: Story = {
  args: {
    label: 'Styled Input',
    placeholder: 'With border + bg',
    className: 'bg-brand-80 border-brand-100',
  },
};
