import { NextRequest, NextResponse } from 'next/server';

const starships = [
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
  {
    id: '2',
    name: 'USS Enterprise-A',
    registry: 'NCC-1701A',
    status: 'operational' as const,
    class: 'Constitution-class refit',
    coordinates: { x: 45.3, y: -32.9, z: 12.6 },
    health: { hull: 88, shields: 90, crew: 98 },
    lastUpdate: '2026-03-05T10:05:00Z',
  },
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    let query = starships;

    // Filtering
    const status = searchParams.get('status');
    if (status) {
      query = query.filter(ship => ship.status === status);
    }

    // Sorting
    const sort = searchParams.get('sort') || 'name';
    query.sort((a, b) => {
      if (sort === 'name') return a.name.localeCompare(b.name);
      if (sort === 'status') return String(a.status).localeCompare(String(b.status));
      if (sort === 'health') return b.health.hull - a.health.hull;
      return 0;
    });

    // Search
    const search = searchParams.get('search');
    if (search) {
      query = query.filter(ship => 
        ship.name.toLowerCase().includes(search.toLowerCase()) ||
        ship.registry.toLowerCase().includes(search.toLowerCase()) ||
        ship.class.toLowerCase().includes(search.toLowerCase())
      );
    }

    return NextResponse.json({ success: true, data: query });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
