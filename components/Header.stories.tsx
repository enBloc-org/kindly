import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import ConversationContextProvider from '@/context/conversationContext';

import NavigationLinkContainer from './navigation/NavigationLinkContainer';
import ProfileRouteIcon from './icons/navigation/ProfileRouteIcon';
import BackArrowIcon from './icons/BackArrowIcon';
import KindlyLogoLink from './navigation/KindlyLogoLink';
import DesktopNav from './navigation/DesktopNav';

const meta: Meta = {
  title: 'Components/Header',
  decorators: [
    (Story, context) => (
      <ConversationContextProvider>
        <Story {...context.args} />
      </ConversationContextProvider>
    ),
  ],
  argTypes: {
    isBreakpoint: { control: 'boolean' },
    showConversationsList: { control: 'boolean' },
    pathname: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<{
  isBreakpoint: boolean;
  showConversationsList: boolean;
  pathname: string;
}>;

/**
 * The Header component is responsible for rendering the top panel of the application (header),
 * which will change its appearance depending on the variables.
 *
 * @param isBreakpoint – indicates whether the current viewport is below the breakpoint,
 * which affects which header will be displayed - mobile or desktop.
 *
 * @param showConversationsList - Affects the display of elements in the mobile version of the application.
 *
 * @param pathname - Affects the display of the color of the user profile icon in the mobile version of the application.
 */
export const HeaderView: Story = {
  args: {
    isBreakpoint: false,
    showConversationsList: true,
    pathname: '/profile',
  },
  render: ({ isBreakpoint, showConversationsList, pathname }) => (
    <header className='min-h-30 sticky top-0 z-10 flex flex-shrink-0 items-center justify-between bg-background px-4 py-2 shadow-sm'>
      {!isBreakpoint && <KindlyLogoLink />}
      {isBreakpoint ? (
        showConversationsList ? (
          <>
            <KindlyLogoLink />
            <NavigationLinkContainer
              href='/profile'
              ariaLabel='My profile'
              pathName={pathname}
              size='mobile'
            >
              <ProfileRouteIcon pathName={pathname} height={28} width={28} />
            </NavigationLinkContainer>
          </>
        ) : (
          <>
            <button>
              <BackArrowIcon width={40} height={40} stroke='#54BB89' />
            </button>
            <div className='flex flex-row items-center'>
              <p data-testid='conversation-partner-name'>Partner Name</p>
              <img
                className='ml-2 rounded-full'
                alt='user logo'
                width='25'
                height='35'
                src='/default-profile.png'
                style={{ width: '32px', height: '36px' }}
                data-testid='conversation-partner-avatar'
              />
            </div>
          </>
        )
      ) : (
        <DesktopNav />
      )}
    </header>
  ),
};
