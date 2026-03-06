'use client';

import { useMemo, useCallback } from 'react';

export default function OptimizedFleetOverview({ ships }: { ships: any[] }) {
  // Memoize sorted ships by health percentage
  const sortedShips = useMemo(() => {
    return [...ships].sort((a, b) => {
      const aHealth = a.health?.hull + a.health?.shields + a.health?.crew || 0;
      const bHealth = b.health?.hull + b.health?.shields + b.health?.crew || 0;
      return bHealth - aHealth;
    });
  }, [ships]);

  // Memoize critical ships (health < 50%)
  const criticalShips = useMemo(() => {
    return ships.filter(ship => {
      if (!ship.health) return false;
      const avgHealth = (ship.health.hull + ship.health.shields + ship.health.crew) / 3;
      return avgHealth < 50;
    });
  }, [ships]);

  // Memoize fleet health summary
  const fleetHealthSummary = useMemo(() => {
    if (ships.length === 0) return { average: 0, criticalCount: 0 };

    let totalHealth = 0;
    for (const ship of ships) {
      if (ship.health) {
        totalHealth += ship.health.hull + ship.health.shields + ship.health.crew;
      }
    }

    return {
      average: Math.round(totalHealth / (ships.length * 3)),
      criticalCount: criticalShips.length
    };
  }, [ships, criticalShips]);

  const handleRefresh = useCallback(() => {
    console.log('Refreshing fleet data...');
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-bold">Fleet Overview</h3>
      
      <button 
        onClick={handleRefresh}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Refresh Data
      </button>

      <div className="mt-4">
        <h4 className="font-semibold">Fleet Health Summary</h4>
        <p>Average Health: {fleetHealthSummary.average}%</p>
        <p>Critical Ships: {fleetHealthSummary.criticalCount}</p>
      </div>

      <div className="mt-4">
        <h4 className="font-semibold">Ships by Health (Descending)</h4>
        {sortedShips.map(ship => (
          <div key={ship.id} className="mb-2">
            <p>{ship.name}</p>
            <p>Health: {(ship.health?.hull + ship.health?.shields + ship.health?.crew) || 0}%</p>
          </div>
        ))}
      </div>

      {criticalShips.length > 0 && (
        <div className="mt-4">
          <h4 className="font-semibold text-red-500">Critical Ships Alert</h4>
          {criticalShips.map(ship => (
            <div key={ship.id} className="mb-2 bg-red-100 p-2 rounded">
              <p>{ship.name}</p>
              <p>Health: {(ship.health?.hull + ship.health?.shields + ship.health?.crew) || 0}%</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
