/**
 * Live data streaming component with automatic refresh intervals
 */
import React from 'react';
import { useLiveStream } from '../hooks/useLiveStream';

interface LiveDataStreamProps {
  ships: any[];
  intervalMs?: number;
}

export const LiveDataStream = ({ ships, intervalMs = 5000 }: LiveDataStreamProps) => {
  const fetchData = async () => {
    // Simulate fetching ship data
    return await new Promise(resolve => setTimeout(() => resolve(ships), 100));
  };

  const { data, loading, error, lastUpdated } = useLiveStream(fetchData, intervalMs);

  if (error) {
    return <div role="alert">Error: {error}</div>;
  }

  return (
    <div className="live-data-stream">
      <h2>Live Data Stream</h2>
      
      {loading && <p>Loading...</p>}
      
      {data && (
        <div aria-live="polite" aria-busy={loading}>
          <h3>Last Updated: {lastUpdated?.toLocaleTimeString()}</h3>
          <ul>
            {data.map((ship: any) => (
              <li key={ship.id}>
                {ship.name} - Status: {ship.status}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
