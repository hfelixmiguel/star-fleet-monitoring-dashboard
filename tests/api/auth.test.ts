import { describe, it, expect } from 'vitest';
import { NextRequest, NextResponse } from 'next/server';
import { POST } from '../src/app/api/auth/login/route';

const mockStarships = [
  {
    id: '1',
    name: 'USS Enterprise',
    registry: 'NCC-1701',
    status: 'operational' as const,
    class: 'Constitution-class',
    coordinates: { x: 45.2, y: -32.8, z: 12.5 },
    health: { hull: 95, shields: 87, crew: 100 },
    lastUpdate: '2026-03-05T10:00:00Z',
  },
];

describe('POST /api/auth/login', () => {
  it('returns success for valid credentials', async () => {
    const request = new NextRequest(new URL('/api/auth/login'), {});
    
    const response = await POST(request as any);
    
    expect(response.status).toBe(200);
    
    const json = await response.json();
    expect(json.success).toBe(true);
  });
});
