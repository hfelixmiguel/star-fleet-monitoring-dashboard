/**
 * API endpoint for alert management
 */
import { NextApiRequest, NextApiResponse } from 'next';

export async function GET(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const alerts = [
    { message: 'High CPU usage detected', severity: 'warning', timestamp: new Date().toISOString() },
    { message: 'Memory usage critical', severity: 'critical', timestamp: new Date().toISOString() }
  ];

  return Response.json(alerts);
}