'use client';

import { ShipCard } from '@/components';
import { mockStarships } from '@/data';

export default function Home() {
  const operational = mockStarships.filter(s => s.status === 'operational').length;
  const maintenance = mockStarships.filter(s => s.status === 'maintenance').length;
  const critical = mockStarships.filter(s => s.status === 'critical').length;

  return (
    <main className="min-h-screen p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Starfleet Fleet Monitoring Dashboard
        </h1>
        <p className="text-gray-400">Real-time starship status monitoring</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <p className="text-gray-500 text-sm">Total Ships</p>
          <p className="text-2xl font-bold text-white">{mockStarships.length}</p>
        </div>
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <p className="text-gray-500 text-sm">Operational</p>
          <p className="text-2xl font-bold text-green-500">{operational}</p>
        </div>
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <p className="text-gray-500 text-sm">Maintenance</p>
          <p className="text-2xl font-bold text-yellow-500">{maintenance}</p>
        </div>
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <p className="text-gray-500 text-sm">Critical</p>
          <p className="text-2xl font-bold text-red-500">{critical}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockStarships.map(ship => (
          <ShipCard key={ship.id} ship={ship} />
        ))}
      </div>
    </main>
  );
}
