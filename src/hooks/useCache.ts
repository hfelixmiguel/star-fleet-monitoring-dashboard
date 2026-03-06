/**
 * Caching mechanisms for performance optimization
 */
import { useState, useEffect } from 'react';

export const useCache = <T>(key: string, initialValue: T) => {
  const [cache, setCache] = useState<T | null>(null);

  useEffect(() => {
    const cachedValue = localStorage.getItem(key);
    if (cachedValue) {
      try {
        setCache(JSON.parse(cachedValue));
      } catch (error) {
        console.error('Failed to parse cached value:', error);
      }
    }
  }, [key]);

  const updateCache = useCallback((value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
    setCache(value);
  }, [key]);

  return { cache, updateCache };
};
