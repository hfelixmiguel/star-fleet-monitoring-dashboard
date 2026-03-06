/**
 * API endpoint for log aggregation
 */
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const logs = [
    { timestamp: new Date().toISOString(), message: 'System started', level: 'info' },
    { timestamp: new Date().toISOString(), message: 'Connection established', level: 'info' }
  ];

  res.status(200).json(logs);
}
