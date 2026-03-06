# Star Fleet Monitoring Dashboard - API Documentation

## Overview
This document provides comprehensive API documentation for the Star Fleet Monitoring Dashboard.

## Ship Data Interface

```typescript
interface Ship {
  id: string;
  name: string;
  registry: string;
  status: 'operational' | 'damaged' | 'offline';
  health?: {
    hull?: number;
    shields?: number;
    crew?: number;
  };
  coordinates?: {
    x?: number;
    y?: number;
    z?: number;
  };
  lastUpdate?: string;
}
```

## Components API

### AccessibleShipCard
```typescript
interface AccessibleShipCardProps {
  ship: Ship;
}
```

### OptimizedFleetOverview
```typescript
interface OptimizedFleetOverviewProps {
  ships: Ship[];
}
```

## Usage Examples

```tsx
import { AccessibleShipCard } from './AccessibleShipCard';
import { OptimizedFleetOverview } from './OptimizedFleetOverview';

const ship = {
  id: 'ship-001',
  name: 'USS Enterprise',
  registry: 'NCC-1701',
  status: 'operational'
};

// Render a single ship card
<AccessibleShipCard ship={ship} />

// Render fleet overview with multiple ships
const ships = [
  { id: 'ship-001', name: 'USS Enterprise', registry: 'NCC-1701', status: 'operational' },
  { id: 'ship-002', name: 'USS Voyager', registry: 'NX-01', status: 'damaged' }
];

<OptimizedFleetOverview ships={ships} />
```