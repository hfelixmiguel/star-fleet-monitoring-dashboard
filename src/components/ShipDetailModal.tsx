'use client';

import { Starship } from '@/types';

interface ShipDetailModalProps {
  ship: Starship | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ShipDetailModal({ ship, isOpen, onClose }: ShipDetailModalProps) {
  if (!isOpen || !ship) return null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'bg-green-500';
      case 'maintenance': return 'bg-yellow-500';
      case 'critical': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm" 
        onClick={onClose}
      />
      <div className="relative bg-gray-800 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">{ship.name}</h2>
            <span className={`px-3 py-1 rounded-full text-white text-sm ${getStatusColor(ship.status)}`}>
              {ship.status.charAt(0).toUpperCase() + ship.status.slice(1)}
            </span>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-700/50 p-4 rounded-lg">
              <p className="text-gray-400 text-sm">Registry</p>
              <p className="text-white font-mono">{ship.registry}</p>
            </div>
            <div className="bg-gray-700/50 p-4 rounded-lg">
              <p className="text-gray-400 text-sm">Class</p>
              <p className="text-white font-semibold">{ship.class}</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">Health Status</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Hull</span>
                  <span className="text-white">{ship.health.hull}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${ship.health.hull > 70 ? 'bg-green-500' : ship.health.hull > 30 ? 'bg-yellow-500' : 'bg-red-500'}`}
                    style={{ width: `${ship.health.hull}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Shields</span>
                  <span className="text-white">{ship.health.shields}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500"
                    style={{ width: `${ship.health.shields}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">Coordinates</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-700/50 p-3 rounded-lg text-center">
                <p className="text-gray-400 text-xs">X</p>
                <p className="text-white font-mono">{ship.coordinates.x}</p>
              </div>
              <div className="bg-gray-700/50 p-3 rounded-lg text-center">
                <p className="text-gray-400 text-xs">Y</p>
                <p className="text-white font-mono">{ship.coordinates.y}</p>
              </div>
              <div className="bg-gray-700/50 p-3 rounded-lg text-center">
                <p className="text-gray-400 text-xs">Z</p>
                <p className="text-white font-mono">{ship.coordinates.z}</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">Crew</h3>
            <div className="bg-gray-700/50 p-4 rounded-lg">
              <p className="text-3xl font-bold text-white">{ship.health.crew}</p>
              <p className="text-gray-400 text-sm">personnel</p>
            </div>
          </div>

          <div>
            <p className="text-gray-400 text-sm">Last Update</p>
            <p className="text-white">{formatDate(ship.lastUpdate)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
