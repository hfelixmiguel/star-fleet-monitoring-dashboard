'use client';

import { useState } from 'react';

export default function ResponsiveNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="text-white font-bold text-xl">Starfleet Dashboard</div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden bg-blue-500 p-2 rounded"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            <a href="/dashboard" className="text-white hover:text-blue-200">Dashboard</a>
            <a href="/fleet" className="text-white hover:text-blue-200">Fleet Status</a>
            <a href="/reports" className="text-white hover:text-blue-200">Reports</a>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-700">
            <a href="/dashboard" className="block py-2 px-4 text-white hover:bg-blue-500">Dashboard</a>
            <a href="/fleet" className="block py-2 px-4 text-white hover:bg-blue-500">Fleet Status</a>
            <a href="/reports" className="block py-2 px-4 text-white hover:bg-blue-500">Reports</a>
          </div>
        )}
      </div>
    </nav>
  );
}
