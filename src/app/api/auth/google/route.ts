/**
 * API endpoint for OAuth2 Google login
 */
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const googleAuthUrl = 'https://accounts.google.com/o/oauth2/auth';
  return res.status(200).json({ url: googleAuthUrl });
}
