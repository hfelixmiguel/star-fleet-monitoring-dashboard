'use client';

import { createContext, useContext } from 'react';

interface SocketContext {
  socket: any;
  isConnected: boolean;
}

const SocketContext = createContext<SocketContext | null>(null);

export const useSocket = () => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error('useSocket must be used within a SocketProvider');
  }
  return context.socket;
};

export { SocketContext };
