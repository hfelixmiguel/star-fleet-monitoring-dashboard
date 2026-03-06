'use client';

import { useState, useMemo } from 'react';

interface SearchFilterBarProps {
  onSearch: (query: string) => void;
  onFilter: (status: string) => void;
}

export default function SearchFilterBar({ onSearch, onFilter }: SearchFilterBarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const status = e.target.value;
    setSelectedStatus(status);
    onFilter(status);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <div className="flex-1">
        <input
          type="text"
          placeholder="Search ships by name, registry, or class..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
        />
      </div>
      <div className="w-full sm:w-48">
        <select
          value={selectedStatus}
          onChange={handleStatusChange}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
        >
          <option value="all">All Status</option>
          <option value="operational">Operational</option>
          <option value="maintenance">Maintenance</option>
          <option value="critical">Critical</option>
        </select>
      </div>
    </div>
  );
}
