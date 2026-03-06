/**
 * API endpoint for alert management
 */
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const alerts = [
    { message: 'High CPU usage detected', severity: 'warning', timestamp: new Date().toISOString() },
    { message: 'Memory usage critical', severity: 'critical', timestamp: new Date().toISOString() }
  ];

  res.status(200).json(alerts);
}
