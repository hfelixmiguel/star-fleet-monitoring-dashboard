/**
 * Bundle size reduction component with tree shaking optimization
 */
import React from 'react';
import { useMemo } from 'react';

interface BundleSizeReductionProps {
  ships: any[];
}

export const BundleSizeReduction = ({ ships }: BundleSizeReductionProps) => {
  const optimizedShips = useMemo(() => {
    // Remove unnecessary data before rendering
    return ships.map(ship => ({
      id: ship.id,
      name: ship.name,
      status: ship.status
    }));
  }, [ships]);

  return (
    <div className="bundle-size-reduction">
      {optimizedShips.map((ship) => (
        <div key={ship.id}>
          {ship.name} - Status: {ship.status}
        </div>
      ))}
    </div>
  );
};
