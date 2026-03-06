/**
 * Caching component for performance optimization
 */
import React from 'react';
import { useCache } from '../hooks/useCache';

interface CacheComponentProps {
  ships: any[];
}

export const CacheComponent = ({ ships }: CacheComponentProps) => {
  const { cache, updateCache } = useCache('ships', []);

  return (
    <div className="cache-component">
      {cache ? (
        <div>
          {cache.map((ship: any) => (
            <div key={ship.id}>
              {ship.name} - Status: {ship.status}
            </div>
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
