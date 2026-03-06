import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password } = body;

    // Simple authentication (replace with real auth in production)
    if (username === 'admin' && password === 'starfleet') {
      const token = Buffer.from(JSON.stringify({ username })).toString('base64');
      
      return NextResponse.json({
        success: true,
        token,
        user: { username },
      });
    }

    return NextResponse.json(
      { success: false, error: 'Invalid credentials' },
      { status: 401 }
    );
  } catch (error) {
    console.error('Auth Error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
