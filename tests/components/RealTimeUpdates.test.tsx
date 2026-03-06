/**
 * Unit tests for RealTimeUpdates component
 */
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { RealTimeUpdates } from '../components/RealTimeUpdates';

describe('RealTimeUpdates', () => {
  const mockShips = [
    { id: 'ship-1', name: 'USS Enterprise', status: 'active' }
  ];

  it('renders real-time updates component', () => {
    render(<RealTimeUpdates ships={mockShips} />);
    expect(screen.getByText('Real-Time Updates')).toBeInTheDocument();
  });
});
