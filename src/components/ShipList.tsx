'use client';

import { useMemo, useCallback } from 'react';

export default function ShipList({ ships }: { ships: any[] }) {
  const sortedShips = useMemo(() => {
    return [...ships].sort((a, b) => a.name.localeCompare(b.name));
  }, [ships]);

  const handleShipUpdate = useCallback(
    (shipId: string) => {
      console.log(`Updating ship ${shipId}`);
    },
    []
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sortedShips.map((ship) => (
        <ShipCard 
          key={ship.id} 
          ship={ship}
          onUpdate={handleShipUpdate}
        />
      ))}
    </div>
  );
}
