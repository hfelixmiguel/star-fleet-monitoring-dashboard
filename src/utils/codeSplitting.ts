/**
 * Code splitting utilities for faster initial load
 */
import React from 'react';
import dynamic from 'next/dynamic';

export const LazyFleetOverview = dynamic(
  () => import('../components/OptimizedFleetOverview'),
  { loading: () => <div>Loading Fleet Overview...</div> }
);

export const LazyRealTimeUpdates = dynamic(
  () => import('../components/RealTimeUpdates'),
  { loading: () => <div>Loading Real-Time Updates...</div> }
);

export const LazyLiveDataStream = dynamic(
  () => import('../components/LiveDataStream'),
  { loading: () => <div>Loading Live Data Stream...</div> }
);
