/**
 * Real-time metrics collection with Prometheus/Grafana integration
 */
import { useEffect, useState } from 'react';

export const useRealTimeMetrics = () => {
  const [metrics, setMetrics] = useState({
    cpu: 0,
    memory: 0,
    disk: 0,
    network: 0,
    requests: 0,
    errors: 0
  });

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const response = await fetch('/api/metrics');
        const data = await response.json();
        setMetrics(data);
      } catch (error) {
        console.error('Failed to fetch metrics:', error);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return metrics;
};
