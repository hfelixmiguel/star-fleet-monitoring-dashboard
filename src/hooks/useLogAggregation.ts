/**
 * Log aggregation systems using ELK stack or similar solutions
 */
import { useEffect, useState } from 'react';

export const useLogAggregation = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const response = await fetch('/api/logs');
        const data = await response.json();
        setLogs(data);
      } catch (error) {
        console.error('Failed to fetch logs:', error);
      }
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return logs;
};
