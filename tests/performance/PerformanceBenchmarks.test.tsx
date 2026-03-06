/**
 * Performance benchmarks to measure load times and rendering speed
 */
import { describe, it, expect } from 'vitest';
import { AccessibleShipCard } from '../components/AccessibleShipCard';
import { RealTimeUpdates } from '../components/RealTimeUpdates';
import { LiveDataStream } from '../components/LiveDataStream';

const mockShips = [
  { id: 'ship-1', name: 'USS Enterprise', status: 'active' },
  { id: 'ship-2', name: 'USS Voyager', status: 'warning' }
];

describe('Performance Benchmarks', () => {
  it('renders AccessibleShipCard quickly', async () => {
    const start = performance.now();
    render(<AccessibleShipCard ship={mockShips[0]} />);
    const end = performance.now();
    expect(end - start).toBeLessThan(100); // Should render in under 100ms
  });
});
