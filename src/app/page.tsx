'use client';

import { useState, useMemo } from 'react';
import { ShipCard } from '@/components';
import { mockStarships } from '@/data';
import NewsWidget from '@/components/NewsWidget';
import NASAApodWidget from '@/components/NASAApodWidget';
import Link from 'next/link';
import SearchFilterBar from '@/components/SearchFilterBar';
import ShipDetailModal from '@/components/ShipDetailModal';
import ThemeToggle from '@/components/ThemeToggle';
import { Starship } from '@/types';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedShip, setSelectedShip] = useState<Starship | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredShips = useMemo(() => {
    return mockStarships.filter(ship => {
      const matchesSearch = 
        ship.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ship.registry.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ship.class.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesStatus = statusFilter === 'all' || ship.status === statusFilter;
      
      return matchesSearch && matchesStatus;
    });
  }, [searchQuery, statusFilter]);

  const operational = mockStarships.filter(s => s.status === 'operational').length;
  const maintenance = mockStarships.filter(s => s.status === 'maintenance').length;
  const critical = mockStarships.filter(s => s.status === 'critical').length;

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilter = (status: string) => {
    setStatusFilter(status);
  };

  const handleViewDetails = (ship: Starship) => {
    setSelectedShip(ship);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedShip(null);
  };

  const handleUpdate = (shipId: string) => {
    console.log('Update ship:', shipId);
    alert(`Refreshing data for ship ${shipId}...`);
  };

  const handleSendMessage = (shipId: string) => {
    console.log('Send message to ship:', shipId);
    alert(`Message interface opened for ship ${shipId}`);
  };

  return (
    <main className="min-h-screen p-4 md:p-8">
      <header className="mb-6 md:mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">
              Starfleet Fleet Monitoring Dashboard
            </h1>
            <p className="text-gray-400 text-sm md:text-base">Real-time starship status monitoring</p>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/nasa"
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
            >
              NASA 🌌
            </Link>
            <Link
              href="/news"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              Space News 🚀
            </Link>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-6 md:mb-8">
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-3 md:p-4">
          <p className="text-gray-500 text-xs md:text-sm">Total Ships</p>
          <p className="text-xl md:text-2xl font-bold text-white">{mockStarships.length}</p>
        </div>
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-3 md:p-4">
          <p className="text-gray-500 text-xs md:text-sm">Operational</p>
          <p className="text-xl md:text-2xl font-bold text-green-500">{operational}</p>
        </div>
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-3 md:p-4">
          <p className="text-gray-500 text-xs md:text-sm">Maintenance</p>
          <p className="text-xl md:text-2xl font-bold text-yellow-500">{maintenance}</p>
        </div>
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-3 md:p-4">
          <p className="text-gray-500 text-xs md:text-sm">Critical</p>
          <p className="text-xl md:text-2xl font-bold text-red-500">{critical}</p>
        </div>
      </div>

      <SearchFilterBar onSearch={handleSearch} onFilter={handleFilter} />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          {filteredShips.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No ships found matching your criteria.</p>
              <button
                onClick={() => { setSearchQuery(''); setStatusFilter('all'); }}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredShips.map(ship => (
                <ShipCard
                  key={ship.id}
                  ship={ship}
                  onUpdate={handleUpdate}
                  onViewDetails={handleViewDetails}
                  onSendMessage={handleSendMessage}
                />
              ))}
            </div>
          )}
        </div>
        <div className="lg:col-span-1">
          <div className="sticky top-4 space-y-4">
            <NASAApodWidget />
            <NewsWidget />
          </div>
        </div>
      </div>

      <ShipDetailModal
        ship={selectedShip}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </main>
  );
}
