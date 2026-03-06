'use client';

import { useState, useEffect } from 'react';

export default function ScreenReaderAnnouncer() {
  const [announcement, setAnnouncement] = useState('');

  useEffect(() => {
    if (announcement) {
      const announcer = document.createElement('div');
      announcer.setAttribute('role', 'status');
      announcer.setAttribute('aria-live', 'polite');
      announcer.setAttribute('aria-relevant', 'additions textuality');
      announcer.style.display = 'none';
      document.body.appendChild(announcement);

      setTimeout(() => {
        document.body.removeChild(announcer);
      }, 1000);
    }
  }, [announcement]);

  const announce = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    setAnnouncement(message);
    
    if (priority === 'assertive') {
      const announcer = document.createElement('div');
      announcer.setAttribute('role', 'alert');
      announcer.setAttribute('aria-live', 'assertive');
      announcer.style.display = 'none';
      document.body.appendChild(announcer);

      setTimeout(() => {
        document.body.removeChild(announcer);
      }, 1000);
    }
  };

  return (
    <div>
      <button 
        onClick={() => announce('Dashboard updated with new fleet data')}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Announce Update
      </button>

      <button 
        onClick={() => announce('Critical alert: Ship hull damage detected', 'assertive')}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
      >
        Announce Alert
      </button>
    </div>
  );
}
