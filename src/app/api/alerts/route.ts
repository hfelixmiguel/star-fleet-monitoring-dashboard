/**
 * API endpoint for alert management
 */
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const alerts = [
    { message: 'High CPU usage detected', severity: 'warning', timestamp: new Date().toISOString() },
    { message: 'Memory usage critical', severity: 'critical', timestamp: new Date().toISOString() }
  ];

  return NextResponse.json(alerts);
}