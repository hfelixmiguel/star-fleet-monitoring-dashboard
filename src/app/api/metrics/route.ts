/**
 * API endpoint for real-time metrics
 */
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const metrics = {
    cpu: Math.random() * 100,
    memory: Math.random() * 100,
    disk: Math.random() * 100,
    network: Math.random() * 100,
    requests: Math.floor(Math.random() * 1000),
    errors: Math.floor(Math.random() * 10)
  };

  res.status(200).json(metrics);
}
