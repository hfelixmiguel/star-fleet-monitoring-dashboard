'use client';

import { useMemo, useCallback } from 'react';

export default function ShipStats({ ships }: { ships: any[] }) {
  const stats = useMemo(() => {
    const totalShips = ships.length;
    const operationalCount = ships.filter(s => s.status === 'operational').length;
    const avgHealth = Math.round(
      ships.reduce((acc, ship) => acc + ship.health.hull, 0) / totalShips
    );

    return {
      total: totalShips,
      operational: operationalCount,
      averageHealth: avgHealth,
    };
  }, [ships]);

  const handleRefresh = useCallback(() => {
    console.log('Refreshing stats');
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="bg-blue-500 text-white p-4 rounded-lg">
        <h3>Total Ships</h3>
        <p className="text-2xl font-bold">{stats.total}</p>
      </div>
      
      <div className="bg-green-500 text-white p-4 rounded-lg">
        <h3>Operational</h3>
        <p className="text-2xl font-bold">{stats.operational}</h3>
      </div>

      <div className="bg-yellow-500 text-white p-4 rounded-lg">
        <h3>Avg Health</h3>
        <p className="text-2xl font-bold">{stats.averageHealth}%</p>
      </div>
    </div>
  );
}
