/**
 * Unit tests for useConnectionStatus hook
 */
import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useConnectionStatus } from '../hooks/useConnectionStatus';

describe('useConnectionStatus', () => {
  const { result } = renderHook(() => useConnectionStatus());

  it('initializes with connecting state', () => {
    expect(result.current.status).toBe('connecting');
  });
});
