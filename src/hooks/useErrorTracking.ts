/**
 * Error tracking integration with Sentry or similar tools
 */
import { useEffect } from 'react';

export const useErrorTracking = () => {
  useEffect(() => {
    window.onerror = (error) => {
      console.error('Captured error:', error);
      // Send to Sentry or other error tracking service
      if (window.Sentry) {
        window.Sentry.captureException(error);
      }
    };
  }, []);
};
