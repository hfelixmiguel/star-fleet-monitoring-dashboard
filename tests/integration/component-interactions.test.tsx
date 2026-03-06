/**
 * Integration tests for component interactions and data flow
 */
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { RealTimeUpdates } from '../components/RealTimeUpdates';
import { LiveDataStream } from '../components/LiveDataStream';
import { Notifications } from '../components/Notifications';
import { ConnectionStatus } from '../components/ConnectionStatus';

const mockShips = [
  { id: 'ship-1', name: 'USS Enterprise', status: 'active' },
  { id: 'ship-2', name: 'USS Voyager', status: 'warning' }
];

describe('Component Integration', () => {
  it('renders all components together', () => {
    render(
      <>
        <RealTimeUpdates ships={mockShips} />
        <LiveDataStream ships={mockShips} />
        <Notifications />
        <ConnectionStatus />
      </>
    );

    expect(screen.getByText('Real-Time Updates')).toBeInTheDocument();
    expect(screen.getByText('Live Data Stream')).toBeInTheDocument();
  });
});
