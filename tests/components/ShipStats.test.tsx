import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ShipStats from '../src/components/ShipStats';

const mockShips = [
  {
    id: '1',
    name: 'USS Enterprise',
    status: 'operational' as const,
    health: { hull: 95, shields: 87, crew: 100 },
  },
  {
    id: '2',
    name: 'USS Voyager',
    status: 'damaged' as const,
    health: { hull: 60, shields: 45, crew: 80 },
  },
];

describe('ShipStats Component', () => {
  it('displays total ship count', () => {
    render(<ShipStats ships={mockShips} />);
    
    expect(screen.getByText('Total Ships')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('calculates operational count correctly', () => {
    render(<ShipStats ships={mockShips} />);
    
    expect(screen.getByText('Operational')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('calculates average health percentage', () => {
    render(<ShipStats ships={mockShips} />);
    
    expect(screen.getByText('Avg Health')).toBeInTheDocument();
    expect(screen.getByText('78%')).toBeInTheDocument(); // (95 + 60) / 2 = 77.5 ≈ 78
  });
});
