'use client';

import { useState, useEffect } from 'react';

export default function AccessibleNavigation() {
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    { name: 'Dashboard', href: '/', key: 'd' },
    { name: 'Fleet Status', href: '/fleet-status', key: 'f' },
    { name: 'Ship Details', href: '/ship-details', key: 's' },
    { name: 'Alerts', href: '/alerts', key: 'a' }
  ];

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      setActiveIndex(prev => (prev + 1) % menuItems.length);
    } else if (e.key === 'ArrowLeft') {
      setActiveIndex(prev => (prev - 1 + menuItems.length) % menuItems.length);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleFocus = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <nav 
      role="navigation"
      aria-label="Main navigation"
      className="bg-gray-800 text-white p-4"
    >
      <ul role="menubar" aria-label="Navigation menu">
        {menuItems.map((item, index) => (
          <li key={item.name}>
            <a
              href={item.href}
              className={`px-4 py-2 rounded ${
                activeIndex === index ? 'bg-blue-500' : ''
              }`}
              role="menuitem"
              tabIndex={activeIndex === index ? 0 : -1}
              onFocus={() => handleFocus(index)}
              onKeyDown={(e) => {
                if (e.key === item.key.toLowerCase()) {
                  e.preventDefault();
                  window.location.href = item.href;
                }
              }}
            >
              {item.name} ({item.key.toUpperCase()})
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
