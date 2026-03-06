/**
 * Unit tests for useNotifications hook
 */
import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useNotifications } from '../hooks/useNotifications';

describe('useNotifications', () => {
  const { result } = renderHook(() => useNotifications());

  it('adds notifications', () => {
    result.current.addNotification('info', 'Test notification');
    expect(result.current.notifications.length).toBe(1);
  });
});
