import { NextRequest, NextResponse } from 'next/server';

const NASA_API_KEY = process.env.NASA_API_KEY || 'DEMO_KEY';
const MARS_API_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const sol = searchParams.get('sol') || '1000';
  const page = searchParams.get('page') || '1';
  
  try {
    const url = `${MARS_API_URL}?sol=${sol}&page=${page}&api_key=${NASA_API_KEY}`;

    const response = await fetch(url, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch Mars rover photos' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching Mars photos:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
