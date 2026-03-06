'use client';

import { useMemo, useCallback } from 'react';

interface ShipCardProps {
  ship: any;
  onUpdate?: (shipId: string) => void;
}

export default function ShipCard({ ship, onUpdate }: ShipCardProps) {
  const formattedHealth = useMemo(() => {
    return `${ship.health.hull}% Hull | ${ship.health.shields}% Shields`;
  }, [ship.health]);

  const handleUpdate = useCallback(() => {
    if (onUpdate) {
      onUpdate(ship.id);
    }
  }, [ship.id, onUpdate]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
      <h2 className="text-xl font-bold">{ship.name}</h2>
      <p className="text-gray-600">Registry: {ship.registry}</p>
      <p className="text-sm text-blue-500">Class: {ship.class}</p>
      
      <div className="mt-4">
        <span className={`inline-block px-3 py-1 rounded ${
          ship.status === 'operational' ? 'bg-green-200' : 'bg-red-200'
        }`}>
          {ship.status}
        </span>
      </div>

      <p className="mt-4 text-sm">{formattedHealth}</p>

      <button 
        onClick={handleUpdate}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Refresh Data
      </button>
    </div>
  );
}
