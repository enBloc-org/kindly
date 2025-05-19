import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { within } from '@storybook/test';
import { expect } from '@storybook/jest';
import Footer from './Footer';

export default {
  title: 'Components/Footer',
  component: Footer,
  decorators: [
    (Story) => (
      <div className='flex min-h-screen flex-col justify-end bg-gray-100'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Footer>;

const Template: StoryFn<typeof Footer> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.play = async ({ canvasElement }) => {
  const canvas = await within(canvasElement);
  expect(canvas.getByRole('contentinfo')).toBeInTheDocument();
  expect(canvas.getByText('Follow us at:')).toBeInTheDocument();
  expect(canvas.getByText('Company Info')).toBeInTheDocument();
  expect(
    canvas.getByText((content) => content.includes('©2024'))
  ).toBeInTheDocument();
};
