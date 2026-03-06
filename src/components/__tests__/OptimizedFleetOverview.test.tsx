/**
 * Integration tests for fleet overview functionality
 */
import { render, screen } from '@testing-library/react';
import OptimizedFleetOverview from '../OptimizedFleetOverview';
import { generateMockShips } from '../../utils/mockData';

describe('OptimizedFleetOverview Integration', () => {
  it('displays fleet overview with multiple ships', async () => {
    const mockShips = generateMockShips(5);
    render(<OptimizedFleetOverview ships={mockShips} />);
    
    expect(screen.getByText('Fleet Overview')).toBeInTheDocument();
    expect(screen.getByText(/Refresh Data/i)).toBeInTheDocument();
  });

  it('displays critical ships alert when health is low', async () => {
    const mockShips = [
      { id: 'ship-001', name: 'USS Enterprise', status: 'operational', health: { hull: 40, shields: 30, crew: 20 } }
    ];
    render(<OptimizedFleetOverview ships={mockShips} />);
    
    expect(screen.getByText('Critical Ships Alert')).toBeInTheDocument();
  });

  it('displays sorted ships by health', async () => {
    const mockShips = [
      { id: 'ship-001', name: 'USS Enterprise', status: 'operational', health: { hull: 95, shields: 88, crew: 92 } },
      { id: 'ship-002', name: 'USS Voyager', status: 'damaged', health: { hull: 65, shields: 70, crew: 80 } }
    ];
    render(<OptimizedFleetOverview ships={mockShips} />);
    
    expect(screen.getByText('Ships by Health (Descending)')).toBeInTheDocument();
  });
});
