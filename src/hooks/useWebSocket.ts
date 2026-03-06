/**
 * WebSocket connection management for real-time data
 */
import { useState, useEffect } from 'react';

export const useWebSocket = (url: string) => {
  const [connected, setConnected] = useState(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let ws: WebSocket;

    try {
      ws = new WebSocket(url);

      ws.onopen = () => setConnected(true);
      ws.onclose = () => setConnected(false);
      ws.onerror = (err) => setError('WebSocket connection error');
      ws.onmessage = (event) => {
        const parsedData = JSON.parse(event.data);
        setData(parsedData);
      };
    } catch (err) {
      setError('Failed to establish WebSocket connection');
    }

    return () => {
      if (ws) ws.close();
    };
  }, [url]);

  return { connected, data, error };
};
