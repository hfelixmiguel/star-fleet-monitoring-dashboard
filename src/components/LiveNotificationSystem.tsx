'use client';

import { useState, useEffect } from 'react';

export default function LiveNotificationSystem() {
  const [notifications, setNotifications] = useState<any[]>([]);

  useEffect(() => {
    let ws: WebSocket | null = null;

    try {
      ws = new WebSocket('ws://localhost:3000/api/websocket');

      ws.onopen = () => {
        console.log('Notification WebSocket connected');
      };

      ws.onmessage = (event) => {
        const message = JSON.parse(event.data);
        
        if (message.type === 'alert') {
          setNotifications(prev => [
            { ...message, timestamp: new Date() },
            ...prev.slice(0, 9)
          ]);
        }
      };

      ws.onclose = () => {
        console.log('Notification WebSocket disconnected');
      };
    } catch (error) {
      console.error('Failed to connect notification WebSocket:', error);
    }

    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, []);

  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="fixed top-4 right-4 max-w-xs">
      {notifications.map((notification, index) => (
        <div 
          key={index}
          className={`p-4 mb-2 rounded-lg shadow-md ${
            notification.severity === 'critical' ? 'bg-red-500 text-white' : 'bg-yellow-500'
          }`}
        >
          <h4 className="font-bold">{notification.title}</h4>
          <p>{notification.message}</p>
          <span className="text-xs">{new Date(notification.timestamp).toLocaleTimeString()}</span>
        </div>
      ))}

      {notifications.length > 0 && (
        <button 
          onClick={clearNotifications}
          className="mt-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Clear All
        </button>
      )}
    </div>
  );
}
