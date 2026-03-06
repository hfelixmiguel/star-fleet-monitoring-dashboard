'use client';

import { useEffect, useRef } from 'react';

export default function FocusManager() {
  const focusTargetRef = useRef<HTMLDivElement>(null);

  const setFocus = (element: HTMLElement) => {
    element.focus();
  };

  const clearFocus = () => {
    document.activeElement?.blur();
  };

  useEffect(() => {
    if (focusTargetRef.current) {
      focusTargetRef.current.focus();
    }
  }, []);

  return (
    <div className="p-4">
      <h3 className="text-xl font-bold">Focus Management</h3>
      
      <button 
        onClick={() => setFocus(document.getElementById('focus-target') as HTMLElement)}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Set Focus to Target
      </button>

      <div 
        id="focus-target" 
        className="mt-4 p-4 bg-gray-100 rounded border-2 border-dashed"
        tabIndex={0}
        role="region"
        aria-label="Focus target area"
      >
        Focus Target Area
      </div>

      <button 
        onClick={clearFocus}
        className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
      >
        Clear Focus
      </button>
    </div>
  );
}
