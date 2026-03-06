/**
 * Accessibility tests using axe-core for WCAG compliance
 */
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { AccessibleShipCard } from '../components/AccessibleShipCard';
import { RealTimeUpdates } from '../components/RealTimeUpdates';
import { LiveDataStream } from '../components/LiveDataStream';

const mockShips = [
  { id: 'ship-1', name: 'USS Enterprise', status: 'active' }
];

describe('Accessibility Tests', () => {
  it('AccessibleShipCard is accessible', async () => {
    const container = render(<AccessibleShipCard ship={mockShips[0]} />);
    await expect(container).toBeAccessible();
  });

  it('RealTimeUpdates is accessible', async () => {
    const container = render(<RealTimeUpdates ships={mockShips} />);
    await expect(container).toBeAccessible();
  });
});
