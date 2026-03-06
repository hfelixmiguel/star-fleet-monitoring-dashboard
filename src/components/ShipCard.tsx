'use client';

import { useMemo, useCallback } from 'react';
import { Starship } from '@/types';

interface ShipCardProps {
  ship: Starship;
  onUpdate?: (shipId: string) => void;
  onViewDetails?: (ship: Starship) => void;
  onSendMessage?: (shipId: string) => void;
}

export default function ShipCard({ ship, onUpdate, onViewDetails, onSendMessage }: ShipCardProps) {
  const formattedHealth = useMemo(() => {
    return `${ship.health.hull}% Hull | ${ship.health.shields}% Shields`;
  }, [ship.health]);

  const handleUpdate = useCallback(() => {
    if (onUpdate) {
      onUpdate(ship.id);
    }
  }, [ship.id, onUpdate]);

  const handleViewDetails = useCallback(() => {
    if (onViewDetails) {
      onViewDetails(ship);
    }
  }, [ship, onViewDetails]);

  const handleSendMessage = useCallback(() => {
    if (onSendMessage) {
      onSendMessage(ship.id);
    }
  }, [ship.id, onSendMessage]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'bg-green-500';
      case 'maintenance': return 'bg-yellow-500';
      case 'critical': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getHealthBarColor = (value: number) => {
    if (value > 70) return 'bg-green-500';
    if (value > 30) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-700">
      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-bold text-white">{ship.name}</h3>
            <p className="text-gray-400 text-sm font-mono">{ship.registry}</p>
          </div>
          <span className={`px-2 py-1 rounded text-xs font-medium text-white ${getStatusColor(ship.status)}`}>
            {ship.status}
          </span>
        </div>

        <p className="text-blue-400 text-sm mb-4">{ship.class} Class</p>

        {/* Health Bars */}
        <div className="space-y-2 mb-4">
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-400">Hull</span>
              <span className="text-white">{ship.health.hull}%</span>
            </div>
            <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className={`h-full ${getHealthBarColor(ship.health.hull)}`}
                style={{ width: `${ship.health.hull}%` }}
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-400">Shields</span>
              <span className="text-white">{ship.health.shields}%</span>
            </div>
            <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-500"
                style={{ width: `${ship.health.shields}%` }}
              />
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-2">
          <button
            onClick={handleViewDetails}
            className="flex-1 px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
          >
            Details
          </button>
          <button
            onClick={handleSendMessage}
            className="px-3 py-2 bg-gray-700 text-white text-sm rounded-lg hover:bg-gray-600 transition-colors"
            title="Send Message"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </button>
          <button
            onClick={handleUpdate}
            className="px-3 py-2 bg-gray-700 text-white text-sm rounded-lg hover:bg-gray-600 transition-colors"
            title="Refresh Data"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
