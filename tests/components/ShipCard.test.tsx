import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ShipCard from '../src/components/ShipCard';

const mockShip = {
  id: '1',
  name: 'USS Enterprise',
  registry: 'NCC-1701',
  status: 'operational' as const,
  class: 'Constitution-class',
  coordinates: { x: 45.2, y: -32.8, z: 12.5 },
  health: { hull: 95, shields: 87, crew: 100 },
  lastUpdate: '2026-03-05T10:00:00Z',
};

describe('ShipCard Component', () => {
  it('renders ship name and registry', () => {
    render(<ShipCard ship={mockShip} />);
    
    expect(screen.getByText('USS Enterprise')).toBeInTheDocument();
    expect(screen.getByText('Registry: NCC-1701')).toBeInTheDocument();
  });

  it('displays health status', () => {
    render(<ShipCard ship={mockShip} />);
    
    expect(screen.getByText('95% Hull | 87% Shields')).toBeInTheDocument();
  });

  it('calls onUpdate when refresh button is clicked', async () => {
    const mockOnUpdate = vi.fn();
    render(<ShipCard ship={mockShip} onUpdate={mockOnUpdate} />);
    
    fireEvent.click(screen.getByText('Refresh Data'));
    
    expect(mockOnUpdate).toHaveBeenCalledWith('1');
  });
});
