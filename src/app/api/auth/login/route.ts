/**
 * API endpoint for user login
 */
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, password } = body;

  // Validate credentials
  if (email === 'admin@example.com' && password === 'password') {
    return NextResponse.json({ token: 'jwt-token', role: 'admin' });
  }

  return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
}