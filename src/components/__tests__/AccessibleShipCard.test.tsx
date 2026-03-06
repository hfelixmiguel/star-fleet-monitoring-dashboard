import { render, screen } from '@testing-library/react';
import AccessibleShipCard from '../AccessibleShipCard';

const mockShip = {
  id: 'ship-001',
  name: 'USS Enterprise',
  registry: 'NCC-1701',
  status: 'operational',
  health: {
    hull: 95,
    shields: 88,
    crew: 92
  },
  coordinates: { x: 45.2, y: -32.1, z: 10.5 },
  lastUpdate: '2026-03-06T12:00:00Z'
};

describe('AccessibleShipCard', () => {
  it('renders ship name and registry', () => {
    render(<AccessibleShipCard ship={mockShip} />);
    
    expect(screen.getByText('USS Enterprise')).toBeInTheDocument();
    expect(screen.getByText('Registry: NCC-1701')).toBeInTheDocument();
  });

  it('displays health status', () => {
    render(<AccessibleShipCard ship={mockShip} />);
    
    expect(screen.getByText('Hull: 95%')).toBeInTheDocument();
    expect(screen.getByText('Shields: 88%')).toBeInTheDocument();
    expect(screen.getByText('Crew: 92%')).toBeInTheDocument();
  });

  it('expands and collapses details', async () => {
    render(<AccessibleShipCard ship={mockShip} />);
    
    const expandButton = screen.getByRole('button', { name: /expand/i });
    expect(expandButton).toBeInTheDocument();
    
    await expandButton.click();
    
    const collapseButton = screen.getByRole('button', { name: /collapse/i });
    expect(collapseButton).toBeInTheDocument();
  });

  it('has proper ARIA attributes for accessibility', () => {
    render(<AccessibleShipCard ship={mockShip} />);
    
    const card = screen.getByRole('article');
    expect(card).toHaveAttribute('aria-label', 'Ship card for USS Enterprise');
  });
});
