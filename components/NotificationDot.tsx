'use client';

import '../app/styles/messaging-styles.css';

type NotificationDotProps = {
  hasNotification: boolean;
  top: number;
  left: number;
};

/**
 * @description Displays notification dot.
 * @param hasNotification - A boolean indicating if the notification dot should be shown.
 * @param top - Adjust notification dot top position (rem).
 * @param left -Adjust notification dot left position (rem).
 */
const NotificationDot = ({
  hasNotification,
  top,
  left,
}: NotificationDotProps) => {
  return (
    hasNotification && (
      <div
        className='absolute z-50 h-3 w-3 rounded-full border-2 border-green-700 bg-[#54BB89] shadow-lg outline-4 outline-black'
        style={{
          top: `${top}rem`,
          left: `${left}rem`,
        }}
      />
    )
  );
};

export default NotificationDot;
