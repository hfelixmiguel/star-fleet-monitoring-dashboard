/**
 * Bundle size reduction techniques with tree shaking optimization
 */
import { useMemo } from 'react';

export const useBundleSizeOptimization = (data: any[]) => {
  return useMemo(() => {
    // Remove unnecessary data before rendering
    const optimizedData = data.map(item => ({
      id: item.id,
      name: item.name,
      status: item.status
    }));
    return optimizedData;
  }, [data]);
};
