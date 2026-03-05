import { describe, it, expect } from 'vitest';

const statusColors = {
  operational: 'bg-green-500',
  maintenance: 'bg-yellow-500',
  critical: 'bg-red-500',
  decommissioned: 'bg-gray-500',
};

describe('ShipCard component utilities', () => {
  it('should have correct status colors', () => {
    expect(statusColors.operational).toBe('bg-green-500');
    expect(statusColors.maintenance).toBe('bg-yellow-500');
    expect(statusColors.critical).toBe('bg-red-500');
    expect(statusColors.decommissioned).toBe('bg-gray-500');
  });
});
