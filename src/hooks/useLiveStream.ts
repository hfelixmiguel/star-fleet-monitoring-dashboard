/**
 * Live data streaming with automatic refresh intervals
 */
import { useState, useEffect } from 'react';

export const useLiveStream = <T>(
  fetchData: () => Promise<T>,
  intervalMs: number = 5000
) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  useEffect(() => {
    const fetchDataWithTimeout = async () => {
      try {
        setLoading(true);
        const result = await fetchData();
        setData(result);
        setLastUpdated(new Date());
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchDataWithTimeout();
    const interval = setInterval(fetchDataWithTimeout, intervalMs);

    return () => clearInterval(interval);
  }, [fetchData, intervalMs]);

  return { data, loading, error, lastUpdated };
};
