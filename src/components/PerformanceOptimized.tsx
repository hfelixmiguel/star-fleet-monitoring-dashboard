/**
 * Performance optimization component with lazy loading and memoization
 */
import React from 'react';
import { useMemo, useCallback } from 'react';
import { useBundleSizeOptimization } from '../hooks/useBundleSizeOptimization';
import { LazyFleetOverview } from '../utils/codeSplitting';

interface PerformanceOptimizedProps {
  ships: any[];
}

export const PerformanceOptimized = ({ ships }: PerformanceOptimizedProps) => {
  const optimizedShips = useBundleSizeOptimization(ships);

  return (
    <div className="performance-optimized">
      <LazyFleetOverview ships={optimizedShips} />
    </div>
  );
};
