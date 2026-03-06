'use client';

import { useEffect } from 'react';
import { useSocket } from './socket-provider';

export default function LiveUpdates() {
  const socket = useSocket();

  useEffect(() => {
    if (!socket) return;

    // Listen for real-time updates
    socket.on('shipUpdate', (data: any) => {
      console.log('Ship updated:', data);
      // Update UI with new data
    });

    socket.on('statusChange', (data: any) => {
      console.log('Status changed:', data);
      // Update status indicators
    });

    return () => {
      socket.off('shipUpdate');
      socket.off('statusChange');
    };
  }, [socket]);

  return null; // This component is for side effects only
}
