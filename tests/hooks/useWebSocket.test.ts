/**
 * Unit tests for useWebSocket hook
 */
import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useWebSocket } from '../hooks/useWebSocket';

describe('useWebSocket', () => {
  const url = 'wss://starfleet-api.com/ships';

  it('initializes with disconnected state', () => {
    const { result } = renderHook(() => useWebSocket(url));
    expect(result.current.connected).toBe(false);
  });
});
