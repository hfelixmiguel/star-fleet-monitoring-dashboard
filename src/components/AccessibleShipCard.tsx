'use client';

import { useState, useEffect } from 'react';

export default function AccessibleShipCard({ ship }: { ship: any }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded(prev => !prev);
  };

  useEffect(() => {
    if (isExpanded) {
      document.body.setAttribute('aria-expanded', 'true');
    } else {
      document.body.removeAttribute('aria-expanded');
    }
  }, [isExpanded]);

  return (
    <div 
      className="bg-white p-4 rounded-lg shadow-md"
      role="article"
      aria-label={`Ship card for ${ship.name}`}
    >
      <h3 className="text-xl font-bold">{ship.name}</h3>
      
      <p className="text-sm text-gray-600">
        Registry: {ship.registry}
      </p>

      <div 
        className={`inline-block px-2 py-1 rounded ${
          ship.status === 'operational' ? 'bg-green-500' :
          ship.status === 'damaged' ? 'bg-yellow-500' : 'bg-red-500'
        } text-white`}
        role="status"
        aria-live="polite"
      >
        {ship.status.toUpperCase()}
      </div>

      <button 
        onClick={handleToggleExpand}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        aria-expanded={isExpanded}
        aria-controls={`ship-details-${ship.id}`}
      >
        {isExpanded ? 'Collapse Details' : 'Expand Details'}
      </button>

      <div 
        id={`ship-details-${ship.id}`}
        className="mt-4"
        role="region"
        aria-label="Ship details"
      >
        <h4 className="font-semibold">Health Status</h4>
        <p>Hull: {ship.health?.hull}%</p>
        <p>Shields: {ship.health?.shields}%</p>
        <p>Crew: {ship.health?.crew}%</p>
      </div>

      <div className="mt-4">
        <h4 className="font-semibold">Coordinates</h4>
        <p>{ship.coordinates?.x}, {ship.coordinates?.y}, {ship.coordinates?.z}</p>
      </div>
    </div>
  );
}
