'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';

export default function OptimizedShipCard({ ship }: { ship: any }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Memoize expensive calculations
  const healthPercentage = useMemo(() => {
    if (!ship.health) return 0;
    const totalHealth = 
      (ship.health.hull + ship.health.shields + ship.health.crew) / 3;
    return Math.round(totalHealth);
  }, [ship.health]);

  // Memoize status color calculation
  const getStatusColor = useCallback(() => {
    switch (ship.status) {
      case 'operational':
        return 'bg-green-500';
      case 'damaged':
        return 'bg-yellow-500';
      case 'offline':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  }, [ship.status]);

  // Memoize formatted coordinates
  const formattedCoordinates = useMemo(() => {
    if (!ship.coordinates) return '';
    return `${ship.coordinates.x.toFixed(2)}, ${ship.coordinates.y.toFixed(2)}, ${ship.coordinates.z.toFixed(2)}`;
  }, [ship.coordinates]);

  // Memoize last update timestamp
  const formattedLastUpdate = useMemo(() => {
    if (!ship.lastUpdate) return '';
    return new Date(ship.lastUpdate).toLocaleString();
  }, [ship.lastUpdate]);

  const handleToggleExpand = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-bold">{ship.name}</h3>
      
      <p className="text-sm text-gray-600">Registry: {ship.registry}</p>
      
      <div className={`inline-block px-2 py-1 rounded ${getStatusColor()} text-white`}>
        {ship.status.toUpperCase()}
      </div>

      <div className="mt-4">
        <h4 className="font-semibold">Health Status</h4>
        <p>Hull: {ship.health?.hull}%</p>
        <p>Shields: {ship.health?.shields}%</p>
        <p>Crew: {ship.health?.crew}%</p>
        <p className="font-bold">Overall: {healthPercentage}%</p>
      </div>

      <div className="mt-4">
        <h4 className="font-semibold">Coordinates</h4>
        <p>{formattedCoordinates}</p>
      </div>

      <div className="mt-4">
        <p>Last Update: {formattedLastUpdate}</p>
      </div>

      <button 
        onClick={handleToggleExpand}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {isExpanded ? 'Collapse' : 'Expand'}
      </button>

      {isExpanded && (
        <div className="mt-4">
          <h4 className="font-semibold">Additional Information</h4>
          <p>Class: {ship.class}</p>
          <p>Commissioned: {ship.commissionDate}</p>
        </div>
      )}
    </div>
  );
}
