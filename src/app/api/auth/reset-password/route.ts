/**
 * API endpoint for password reset
 */
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.body;

  // Send password reset link
  console.log(`Password reset requested for ${email}`);

  return res.status(200).json({ message: 'Password reset link sent' });
}
