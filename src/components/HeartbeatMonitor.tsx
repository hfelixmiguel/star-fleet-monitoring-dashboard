'use client';

import { useState, useEffect } from 'react';

export default function HeartbeatMonitor() {
  const [lastPing, setLastPing] = useState<Date | null>(null);
  const [pingInterval, setPingInterval] = useState<number>(0);
  const [isHealthy, setIsHealthy] = useState(true);

  useEffect(() => {
    let ws: WebSocket | null = null;
    let pingTimestamps: number[] = [];

    try {
      ws = new WebSocket('ws://localhost:3000/api/websocket');

      ws.onopen = () => {
        console.log('Heartbeat WebSocket connected');
      };

      ws.onmessage = (event) => {
        const message = JSON.parse(event.data);
        
        if (message.type === 'ping') {
          const now = Date.now();
          pingTimestamps.push(now);
          setLastPing(new Date());

          if (pingTimestamps.length >= 2) {
            const interval = pingTimestamps[1] - pingTimestamps[0];
            setPingInterval(interval);
            
            if (interval > 5000) {
              setIsHealthy(false);
            } else {
              setIsHealthy(true);
            }
          }

          ws?.send(JSON.stringify({ type: 'pong', timestamp: now }));
        }
      };

      ws.onclose = () => {
        console.log('Heartbeat WebSocket disconnected');
      };
    } catch (error) {
      console.error('Failed to connect heartbeat WebSocket:', error);
      setIsHealthy(false);
    }

    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, []);

  const statusColor = isHealthy ? 'bg-green-500' : 'bg-red-500';

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="text-lg font-bold">Heartbeat Monitor</h3>
      
      <div className={`inline-block px-2 py-1 rounded ${statusColor} text-white`}>
        {isHealthy ? '● Healthy' : '○ Unhealthy'}
      </div>

      {lastPing && (
        <div className="mt-4">
          <p>Last ping: {lastPing.toLocaleTimeString()}</p>
          <p>Ping interval: {pingInterval}ms</p>
        </div>
      )}
    </div>
  );
}
