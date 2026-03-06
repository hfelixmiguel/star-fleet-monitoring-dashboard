/**
 * API endpoint for user login
 */
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password } = req.body;

  // Validate credentials
  if (email === 'admin@example.com' && password === 'password') {
    return res.status(200).json({ token: 'jwt-token', role: 'admin' });
  }

  return res.status(401).json({ error: 'Invalid credentials' });
}
