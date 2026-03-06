import { render, screen } from '@testing-library/react';
import AccessibleNavigation from '../AccessibleNavigation';

describe('AccessibleNavigation', () => {
  it('renders navigation menu items', () => {
    render(<AccessibleNavigation />);
    
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Fleet Status')).toBeInTheDocument();
    expect(screen.getByText('Ship Details')).toBeInTheDocument();
    expect(screen.getByText('Alerts')).toBeInTheDocument();
  });

  it('has proper navigation role', () => {
    render(<AccessibleNavigation />);
    
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveAttribute('aria-label', 'Main navigation');
  });
});
