/**
 * Monitoring dashboard combining all observability features
 */
import { PerformanceDashboard } from './PerformanceDashboard';
import { AlertManagement } from './AlertManagement';
import { LogViewer } from './LogViewer';
import { ErrorTracker } from './ErrorTracker';

export const MonitoringDashboard = () => {
  return (
    <div className="monitoring-dashboard">
      <PerformanceDashboard />
      <AlertManagement />
      <LogViewer />
      <ErrorTracker />
    </div>
  );
};
