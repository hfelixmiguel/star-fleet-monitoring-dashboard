/**
 * Status indicators for connection state monitoring
 */
import { useState, useEffect } from 'react';

export const useConnectionStatus = () => {
  const [status, setStatus] = useState<'connected' | 'disconnected' | 'connecting'>('connecting');
  const [lastPing, setLastPing] = useState<Date | null>(null);

  useEffect(() => {
    const pingInterval = setInterval(() => {
      setStatus(prev => prev === 'connected' ? 'connected' : 'disconnected');
      setLastPing(new Date());
    }, 10000);

    return () => clearInterval(pingInterval);
  }, []);

  return { status, lastPing };
};
