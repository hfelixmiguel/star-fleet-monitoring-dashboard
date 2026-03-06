'use client';

import { useState } from 'react';

export default function WebSocketConnectionManager() {
  const [isConnected, setIsConnected] = useState(false);
  const [pingCount, setPingCount] = useState(0);

  const connectWebSocket = () => {
    let ws: WebSocket | null = null;

    try {
      ws = new WebSocket('ws://localhost:3000/api/websocket');

      ws.onopen = () => {
        setIsConnected(true);
        console.log('WebSocket connected successfully');
      };

      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        console.log('Received:', data);
        
        if (data.type === 'ping') {
          setPingCount(prev => prev + 1);
          ws?.send(JSON.stringify({ type: 'pong' }));
        }
      };

      ws.onclose = () => {
        setIsConnected(false);
        console.log('WebSocket connection closed');
      };

      ws.onerror = (error) => {
        console.error('WebSocket error:', error);
        setIsConnected(false);
      };
    } catch (error) {
      console.error('Failed to connect WebSocket:', error);
      setIsConnected(false);
    }
  };

  const disconnectWebSocket = () => {
    if (ws) {
      ws.close();
      setIsConnected(false);
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h3 className="text-lg font-bold mb-2">WebSocket Connection Manager</h3>
      
      <div className="flex items-center space-x-4">
        <span>Status: {isConnected ? 'Connected' : 'Disconnected'}</span>
        <span>Ping Count: {pingCount}</span>
      </div>

      {!isConnected ? (
        <button 
          onClick={connectWebSocket}
          className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Connect
        </button>
      ) : (
        <button 
          onClick={disconnectWebSocket}
          className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Disconnect
        </button>
      )}
    </div>
  );
}
