'use client';

import { useMemo, useCallback } from 'react';

export default function OptimizedShipStats({ ships }: { ships: any[] }) {
  // Memoize total ship count
  const totalShips = useMemo(() => ships.length, [ships]);

  // Memoize operational count calculation
  const operationalCount = useMemo(() => {
    return ships.filter(ship => ship.status === 'operational').length;
  }, [ships]);

  // Memoize average health percentage calculation
  const averageHealthPercentage = useMemo(() => {
    if (ships.length === 0) return 0;
    
    const totalHealth = ships.reduce((acc, ship) => {
      if (!ship.health) return acc;
      return acc + (ship.health.hull + ship.health.shields + ship.health.crew);
    }, 0);

    return Math.round(totalHealth / (ships.length * 3));
  }, [ships]);

  // Memoize damaged ships count
  const damagedCount = useMemo(() => {
    return ships.filter(ship => ship.status === 'damaged').length;
  }, [ships]);

  // Memoize offline ships count
  const offlineCount = useMemo(() => {
    return ships.filter(ship => ship.status === 'offline').length;
  }, [ships]);

  // Memoize formatted statistics
  const statsSummary = useMemo(() => {
    return {
      total: totalShips,
      operational: operationalCount,
      damaged: damagedCount,
      offline: offlineCount,
      health: averageHealthPercentage
    };
  }, [totalShips, operationalCount, damagedCount, offlineCount, averageHealthPercentage]);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-bold">Fleet Statistics</h3>
      
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <p className="font-semibold">Total Ships:</p>
          <p>{statsSummary.total}</p>
        </div>
        
        <div>
          <p className="font-semibold">Operational:</p>
          <p className="text-green-500">{statsSummary.operational}</p>
        </div>

        <div>
          <p className="font-semibold">Damaged:</p>
          <p className="text-yellow-500">{statsSummary.damaged}</p>
        </div>

        <div>
          <p className="font-semibold">Offline:</p>
          <p className="text-red-500">{statsSummary.offline}</p>
        </div>
      </div>

      <div className="mt-4">
        <p className="font-semibold">Average Health:</p>
        <p>{statsSummary.health}%</p>
      </div>
    </div>
  );
}
