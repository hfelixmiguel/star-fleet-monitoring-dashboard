# Component Usage Examples

## AccessibleShipCard

### Basic Usage
```tsx
import { AccessibleShipCard } from './AccessibleShipCard';

const ship = {
  id: 'ship-001',
  name: 'USS Enterprise',
  registry: 'NCC-1701',
  status: 'operational'
};

<AccessibleShipCard ship={ship} />
```

### With Health Data
```tsx
const shipWithHealth = {
  id: 'ship-002',
  name: 'USS Voyager',
  registry: 'NX-01',
  status: 'damaged',
  health: {
    hull: 65,
    shields: 70,
    crew: 80
  }
};

<AccessibleShipCard ship={shipWithHealth} />
```

## OptimizedFleetOverview

### Basic Usage
```tsx
import { OptimizedFleetOverview } from './OptimizedFleetOverview';

const ships = [
  {
    id: 'ship-001',
    name: 'USS Enterprise',
    registry: 'NCC-1701',
    status: 'operational'
  },
  {
    id: 'ship-002',
    name: 'USS Voyager',
    registry: 'NX-01',
    status: 'damaged'
  }
];

<OptimizedFleetOverview ships={ships} />
```

### With Real-time Updates
```tsx
import { useState, useEffect } from 'react';
import { OptimizedFleetOverview } from './OptimizedFleetOverview';

const FleetDashboard = () => {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setShips(prev => prev.map(ship => ({
        ...ship,
        health: {
          hull: Math.floor(Math.random() * 100),
          shields: Math.floor(Math.random() * 100),
          crew: Math.floor(Math.random() * 100)
        }
      })));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return <OptimizedFleetOverview ships={ships} />;
};
```

## AccessibleNavigation

### Basic Usage
```tsx
import { AccessibleNavigation } from './AccessibleNavigation';

<AccessibleNavigation />
```

## ScreenReaderAnnouncer

### Announcing Updates
```tsx
import { ScreenReaderAnnouncer } from './ScreenReaderAnnouncer';

const Dashboard = () => {
  return (
    <div>
      <h1>Fleet Dashboard</h1>
      <ScreenReaderAnnouncer />
    </div>
  );
};
```

## FocusManager

### Managing Focus
```tsx
import { FocusManager } from './FocusManager';

const Page = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <FocusManager />
    </div>
  );
};
```
