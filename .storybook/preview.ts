import type { Preview } from '@storybook/react';
import 'app/globals.css';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'kindly',
      values: [
        {
          name: 'kindly',
          value: '#F0EFED',
        },
        {
          name: 'messaging',
          value: '#FAFAF9',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ['autodocs'],
};

export default preview;
