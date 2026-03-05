'use client';

import { Ship } from '@/types';

export default function ShipCard({ ship }: { ship: Ship }) {
  const statusColors = {
    operational: 'bg-green-500',
    maintenance: 'bg-yellow-500',
    critical: 'bg-red-500',
    decommissioned: 'bg-gray-500',
  };

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-white">{ship.name}</h2>
          <p className="text-gray-400 text-sm">Registry: {ship.registry}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[ship.status]} bg-opacity-25`}>
          {ship.status.toUpperCase()}
        </span>
      </div>

      <div className="space-y-3">
        <p className="text-gray-400 text-sm">Class: {ship.class}</p>
        
        <div className="flex items-center space-x-2">
          <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
          <p className="text-gray-400 text-sm">X: {ship.coordinates.x}, Y: {ship.coordinates.y}, Z: {ship.coordinates.z}</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-gray-400 text-xs">Hull Integrity</span>
            <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className={`h-full ${ship.health.hull > 80 ? 'bg-green-500' : ship.health.hull > 50 ? 'bg-yellow-500' : 'bg-red-500'} transition-all duration-1000 ease-out`}
                style={{ width: `${ship.health.hull}%`, animation: 'slideIn 1s ease-in-out' }}
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-gray-400 text-xs">Shields</span>
            <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className={`h-full ${ship.health.shields > 80 ? 'bg-green-500' : ship.health.shields > 50 ? 'bg-yellow-500' : 'bg-red-500'} transition-all duration-1000 ease-out`}
                style={{ width: `${ship.health.shields}%`, animation: 'slideIn 1s ease-in-out' }}
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-gray-400 text-xs">Crew</span>
            <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className={`h-full ${ship.health.crew > 80 ? 'bg-green-500' : ship.health.crew > 50 ? 'bg-yellow-500' : 'bg-red-500'} transition-all duration-1000 ease-out`}
                style={{ width: `${ship.health.crew}%`, animation: 'slideIn 1s ease-in-out' }}
              />
            </div>
          </div>
        </div>

        <p className="text-gray-500 text-xs">Last Update: {new Date(ship.lastUpdate).toLocaleString()}</p>
      </div>
    </div>
  );
}
