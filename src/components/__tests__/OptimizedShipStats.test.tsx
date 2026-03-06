import { render, screen } from '@testing-library/react';
import OptimizedShipStats from '../OptimizedShipStats';

const mockShips = [
  {
    id: 'ship-001',
    name: 'USS Enterprise',
    status: 'operational',
    health: { hull: 95, shields: 88, crew: 92 }
  },
  {
    id: 'ship-002',
    name: 'USS Voyager',
    status: 'damaged',
    health: { hull: 65, shields: 70, crew: 80 }
  },
  {
    id: 'ship-003',
    name: 'USS Defiant',
    status: 'offline',
    health: { hull: 40, shields: 50, crew: 60 }
  }
];

describe('OptimizedShipStats', () => {
  it('displays total ship count', () => {
    render(<OptimizedShipStats ships={mockShips} />);
    
    expect(screen.getByText('Total Ships:')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('calculates operational count correctly', () => {
    render(<OptimizedShipStats ships={mockShips} />);
    
    expect(screen.getByText('Operational:')).toBeInTheDocument();
    const operationalCount = screen.getByText('1');
    expect(operationalCount).toBeInTheDocument();
  });

  it('calculates damaged count correctly', () => {
    render(<OptimizedShipStats ships={mockShips} />);
    
    expect(screen.getByText('Damaged:')).toBeInTheDocument();
    const damagedCount = screen.getByText('1');
    expect(damagedCount).toBeInTheDocument();
  });

  it('calculates offline count correctly', () => {
    render(<OptimizedShipStats ships={mockShips} />);
    
    expect(screen.getByText('Offline:')).toBeInTheDocument();
    const offlineCount = screen.getByText('1');
    expect(offlineCount).toBeInTheDocument();
  });
});
