/**
 * Log viewer component for production environments
 */
import { useLogAggregation } from '../hooks/useLogAggregation';

export const LogViewer = () => {
  const logs = useLogAggregation();

  return (
    <div className="log-viewer">
      <h2>System Logs</h2>
      {logs.map((log, index) => (
        <div key={index} className={`log ${log.level}`}>
          <span>{log.timestamp}</span>
          <span>{log.message}</span>
        </div>
      ))}
    </div>
  );
};
