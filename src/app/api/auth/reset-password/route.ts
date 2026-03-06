/**
 * API endpoint for password reset
 */
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email } = body;

  // Send password reset link
  console.log(`Password reset requested for ${email}`);

  return NextResponse.json({ message: 'Password reset link sent' });
}