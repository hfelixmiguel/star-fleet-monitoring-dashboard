/**
 * Unit tests for AccessibleShipCard component
 */
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { AccessibleShipCard } from '../components/AccessibleShipCard';

describe('AccessibleShipCard', () => {
  const mockShip = {
    id: 'ship-1',
    name: 'USS Enterprise',
    status: 'active',
    coordinates: { x: 0, y: 0 },
    health: 95
  };

  it('renders ship card with correct props', () => {
    render(<AccessibleShipCard ship={mockShip} />);
    expect(screen.getByText('USS Enterprise')).toBeInTheDocument();
    expect(screen.getByText('Status: active')).toBeInTheDocument();
  });

  it('displays health percentage', () => {
    render(<AccessibleShipCard ship={mockShip} />);
    expect(screen.getByText('Health: 95%')).toBeInTheDocument();
  });
});
