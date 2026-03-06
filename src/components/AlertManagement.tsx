/**
 * Alert management component for production environments
 */
import { useAlerting } from '../hooks/useAlerting';

export const AlertManagement = () => {
  const alerts = useAlerting();

  return (
    <div className="alert-management">
      <h2>Active Alerts</h2>
      {alerts.map((alert, index) => (
        <div key={index} className={`alert ${alert.severity}`}>
          <span>{alert.message}</span>
          <span>{alert.timestamp}</span>
        </div>
      ))}
    </div>
  );
};
