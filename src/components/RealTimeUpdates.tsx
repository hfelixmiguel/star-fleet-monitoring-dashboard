/**
 * Real-time updates component with WebSocket connections and live data streaming
 */
import React from 'react';
import { useWebSocket } from '../hooks/useWebSocket';
import { useLiveStream } from '../hooks/useLiveStream';
import { useNotifications } from '../hooks/useNotifications';
import { useConnectionStatus } from '../hooks/useConnectionStatus';

interface RealTimeUpdatesProps {
  ships: any[];
  refreshInterval?: number;
}

export const RealTimeUpdates = ({ ships, refreshInterval = 5000 }: RealTimeUpdatesProps) => {
  const { connected, data } = useWebSocket('wss://starfleet-api.com/ships');
  const { status, lastPing } = useConnectionStatus();
  const { notifications, addNotification, removeNotification } = useNotifications();

  const fetchData = async () => {
    // Simulate fetching ship data
    return await new Promise(resolve => setTimeout(() => resolve(ships), 100));
  };

  const { loading, error, lastUpdated } = useLiveStream(fetchData, refreshInterval);

  if (error) {
    addNotification('error', 'Failed to fetch ship data');
  }

  return (
    <div className="real-time-updates">
      <h2>Real-Time Updates</h2>
      
      {notifications.map(notification => (
        <div key={notification.id} role="alert" aria-live="polite">
          <span>{notification.message}</span>
          <button onClick={() => removeNotification(notification.id)}>
            Dismiss
          </button>
        </div>
      ))}

      {loading && <p>Loading...</p>}
      
      {data && (
        <div aria-live="polite">
          <h3>Last Updated: {lastUpdated?.toLocaleTimeString()}</h3>
          <ul>
            {data.map((ship: any) => (
              <li key={ship.id}>
                {ship.name} - Status: {ship.status}
              </li>
            ))}
          </ul>
        </div>
      )}

      <p>Connection Status: {status}</p>
    </div>
  );
};
