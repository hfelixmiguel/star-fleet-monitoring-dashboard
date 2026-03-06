/**
 * Lazy loading utilities for route-based code splitting
 */
import React from 'react';
import dynamic from 'next/dynamic';

export const lazyLoadComponent = <T extends React.ComponentType<any>>(
  component: T,
  options?: Parameters<typeof dynamic>[1]
) => {
  return dynamic(() => Promise.resolve(component), options);
};

// Usage examples:
// import { AccessibleShipCard } from './AccessibleShipCard';
// const LazyShipCard = lazyLoadComponent(AccessibleShipCard);
