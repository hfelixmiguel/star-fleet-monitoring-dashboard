/**
 * Error tracking component for production environments
 */
import { useErrorTracking } from '../hooks/useErrorTracking';

export const ErrorTracker = () => {
  useErrorTracking();

  return (
    <div className="error-tracker">
      <h2>Error Tracking</h2>
      <p>Errors are being tracked and sent to Sentry.</p>
    </div>
  );
};
