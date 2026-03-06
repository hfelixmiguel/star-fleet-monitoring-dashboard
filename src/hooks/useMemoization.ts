/**
 * Memoization strategies using useMemo and useCallback hooks
 */
import { useMemo, useCallback } from 'react';

export const useMemoizedData = <T>(data: T[], keyExtractor: (item: T) => string) => {
  return useMemo(() => {
    const memoizedData = data.map(item => ({
      ...item,
      id: keyExtractor(item)
    }));
    return memoizedData;
  }, [data, keyExtractor]);
};

export const useMemoizedCallback = <T extends (...args: any[]) => any>(
  fn: T,
  dependencies: any[]
) => {
  return useCallback(fn, dependencies);
};
