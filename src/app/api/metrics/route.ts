/**
 * API endpoint for real-time metrics
 */
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const metrics = {
    cpu: Math.random() * 100,
    memory: Math.random() * 100,
    disk: Math.random() * 100,
    network: Math.random() * 100,
    requests: Math.floor(Math.random() * 1000),
    errors: Math.floor(Math.random() * 10)
  };

  return NextResponse.json(metrics);
}