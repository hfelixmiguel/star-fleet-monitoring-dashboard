/**
 * Notification system component for critical alerts
 */
import React from 'react';
import { useNotifications } from '../hooks/useNotifications';

export const Notifications = () => {
  const { notifications, removeNotification } = useNotifications();

  return (
    <div className="notifications" role="alert" aria-live="polite">
      {notifications.map(notification => (
        <div key={notification.id}>
          <span>{notification.message}</span>
          <button onClick={() => removeNotification(notification.id)}>
            Dismiss
          </button>
        </div>
      ))}
    </div>
  );
};
