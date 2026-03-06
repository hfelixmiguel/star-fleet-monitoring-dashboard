/**
 * API endpoint for OAuth2 Google login
 */
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const googleAuthUrl = 'https://accounts.google.com/o/oauth2/auth';
  return NextResponse.json({ url: googleAuthUrl });
}