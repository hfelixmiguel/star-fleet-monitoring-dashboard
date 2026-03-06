/**
 * Unit tests for OptimizedFleetOverview component
 */
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { OptimizedFleetOverview } from '../components/OptimizedFleetOverview';

describe('OptimizedFleetOverview', () => {
  const mockShips = [
    { id: 'ship-1', name: 'USS Enterprise', status: 'active' },
    { id: 'ship-2', name: 'USS Voyager', status: 'warning' }
  ];

  it('renders fleet overview with ships', () => {
    render(<OptimizedFleetOverview ships={mockShips} />);
    expect(screen.getByText('Starfleet Fleet Overview')).toBeInTheDocument();
  });

  it('displays ship count', () => {
    render(<OptimizedFleetOverview ships={mockShips} />);
    expect(screen.getByText(`Total Ships: ${mockShips.length}`)).toBeInTheDocument();
  });
});
