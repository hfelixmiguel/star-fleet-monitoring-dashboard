'use client';

import { Starship } from '@/types';

interface ShipCardProps {
  ship: Starship;
}

const statusColors = {
  operational: 'bg-green-500',
  maintenance: 'bg-yellow-500',
  critical: 'bg-red-500',
  decommissioned: 'bg-gray-500'
};

export default function ShipCard({ ship }: ShipCardProps) {
  return (
    <div className="border border-gray-700 rounded-lg p-4 bg-gray-900 text-white hover:border-blue-500 transition-colors">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-lg font-bold">{ship.name}</h3>
          <p className="text-gray-400 text-sm">{ship.registry}</p>
        </div>
        <span className={`px-2 py-1 rounded text-xs font-medium ${statusColors[ship.status]} text-white`}>
          {ship.status}
        </span>
      </div>
      
      <div className="space-y-2 mt-4">
        <div>
          <p className="text-xs text-gray-500">Class</p>
          <p className="text-sm">{ship.class}</p>
        </div>
        
        <div>
          <p className="text-xs text-gray-500">Coordinates</p>
          <p className="text-sm font-mono">
            X: {ship.coordinates.x} | Y: {ship.coordinates.y} | Z: {ship.coordinates.z}
          </p>
        </div>
        
        <div className="grid grid-cols-3 gap-2 mt-2">
          <div>
            <p className="text-xs text-gray-500">Hull</p>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${ship.health.hull}%` }} />
            </div>
            <p className="text-xs mt-1">{ship.health.hull}%</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Shields</p>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${ship.health.shields}%` }} />
            </div>
            <p className="text-xs mt-1">{ship.health.shields}%</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Crew</p>
            <p className="text-sm">{ship.health.crew}</p>
          </div>
        </div>
      </div>
      
      <p className="text-xs text-gray-600 mt-3">
        Last update: {new Date(ship.lastUpdate).toLocaleString()}
      </p>
    </div>
  );
}
