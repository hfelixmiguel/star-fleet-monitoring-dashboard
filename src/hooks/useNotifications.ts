/**
 * Notification system for critical alerts
 */
import { useState, useCallback } from 'react';

interface Notification {
  id: string;
  type: 'info' | 'warning' | 'error';
  message: string;
  timestamp: Date;
}

export const useNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = useCallback((type: Notification['type'], message: string) => {
    const notification: Notification = {
      id: `notification-${Date.now()}`,
      type,
      message,
      timestamp: new Date()
    };

    setNotifications(prev => [notification, ...prev]);
  }, []);

  const removeNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  return { notifications, addNotification, removeNotification };
};
