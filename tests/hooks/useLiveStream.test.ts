/**
 * Unit tests for useLiveStream hook
 */
import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useLiveStream } from '../hooks/useLiveStream';

describe('useLiveStream', () => {
  const fetchData = async () => ({ data: 'test' });

  it('fetches data with interval', async () => {
    const { result } = renderHook(() => useLiveStream(fetchData, 100));
    await waitFor(() => expect(result.current.data).toBeDefined());
  });
});
