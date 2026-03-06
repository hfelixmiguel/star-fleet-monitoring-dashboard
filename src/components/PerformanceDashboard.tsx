/**
 * Performance dashboards showing system health and resource usage
 */
import { useRealTimeMetrics } from '../hooks/useRealTimeMetrics';

export const PerformanceDashboard = () => {
  const metrics = useRealTimeMetrics();

  return (
    <div className="performance-dashboard">
      <h2>System Health</h2>
      <div className="metrics-grid">
        <div>CPU Usage: {metrics.cpu}%</div>
        <div>Memory Usage: {metrics.memory}%</div>
        <div>Disk Usage: {metrics.disk}%</div>
        <div>Network Traffic: {metrics.network} MB/s</div>
      </div>
    </div>
  );
};
