'use client';

import '../app/styles/messaging-styles.css';

type NotificationDotProps = {
  hasNotification: boolean;
  height?: number;
  width?: number;
  top?: number;
  left?: number;
};

/**
 * @description Displays notification dot.
 * @param hasNotification - A boolean indicating if the notification dot should be shown.
 * @description Adjust these parameters to resize and position the notification dot. These parameters are not required and have default values:
 * @param height - 1rem.
 * @param width - 1rem.
 * @param top - 0rem.
 * @param left - 0rem.
 */
const NotificationDot = ({
  hasNotification,
  height = 1,
  width = 1,
  top = 0,
  left = 0,
}: NotificationDotProps) => {
  return (
    hasNotification && (
      <div
        className={'notification-dot'}
        style={{
          top: `${top}rem`,
          left: `${left}rem`,
          height: `${height}rem`,
          width: `${width}rem`,
        }}
      />
    )
  );
};

export default NotificationDot;
