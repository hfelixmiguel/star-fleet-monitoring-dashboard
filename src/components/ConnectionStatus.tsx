/**
 * Status indicators component for connection state monitoring
 */
import React from 'react';
import { useConnectionStatus } from '../hooks/useConnectionStatus';

export const ConnectionStatus = () => {
  const { status, lastPing } = useConnectionStatus();

  return (
    <div className="connection-status">
      <h3>Connection Status</h3>
      <p>Status: {status}</p>
      <p>Last Ping: {lastPing?.toLocaleTimeString()}</p>
    </div>
  );
};
