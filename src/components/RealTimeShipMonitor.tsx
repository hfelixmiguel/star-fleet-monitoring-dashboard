'use client';

import { useEffect, useState } from 'react';

interface WebSocketMessage {
  type: string;
  data: any;
}

export default function RealTimeShipMonitor({ shipId }: { shipId: string }) {
  const [connectionStatus, setConnectionStatus] = useState<'connected' | 'disconnected'>('disconnected');
  const [shipData, setShipData] = useState<any>(null);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);

  useEffect(() => {
    let ws: WebSocket | null = null;

    try {
      ws = new WebSocket('ws://localhost:3000/api/websocket');

      ws.onopen = () => {
        setConnectionStatus('connected');
        console.log('WebSocket connected');
      };

      ws.onmessage = (event) => {
        const message: WebSocketMessage = JSON.parse(event.data);
        
        if (message.type === 'ship_update' && message.data.id === shipId) {
          setShipData(message.data);
          setLastUpdate(new Date());
        }
      };

      ws.onclose = () => {
        setConnectionStatus('disconnected');
        console.log('WebSocket disconnected');
      };

      ws.onerror = (error) => {
        console.error('WebSocket error:', error);
        setConnectionStatus('disconnected');
      };
    } catch (error) {
      console.error('Failed to connect WebSocket:', error);
      setConnectionStatus('disconnected');
    }

    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, [shipId]);

  const statusColor = connectionStatus === 'connected' ? 'bg-green-500' : 'bg-red-500';

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="text-lg font-bold">Real-time Monitor</h3>
      
      <div className={`inline-block px-2 py-1 rounded ${statusColor} text-white`}>
        {connectionStatus === 'connected' ? '● Connected' : '○ Disconnected'}
      </div>

      {shipData && (
        <div className="mt-4">
          <p>Last update: {lastUpdate?.toLocaleTimeString()}</p>
          <pre className="text-xs">{JSON.stringify(shipData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
