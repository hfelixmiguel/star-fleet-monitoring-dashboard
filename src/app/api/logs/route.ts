/**
 * API endpoint for log aggregation
 */
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const logs = [
    { timestamp: new Date().toISOString(), message: 'System started', level: 'info' },
    { timestamp: new Date().toISOString(), message: 'Connection established', level: 'info' }
  ];

  return NextResponse.json(logs);
}