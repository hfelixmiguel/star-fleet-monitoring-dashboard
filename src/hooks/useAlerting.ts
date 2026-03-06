/**
 * Alerting mechanisms for production environments
 */
import { useEffect, useState } from 'react';

export const useAlerting = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const response = await fetch('/api/alerts');
        const data = await response.json();
        setAlerts(data);
      } catch (error) {
        console.error('Failed to fetch alerts:', error);
      }
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return alerts;
};
