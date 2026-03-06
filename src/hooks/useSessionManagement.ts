/**
 * Session management with JWT tokens and refresh token rotation
 */
import { useEffect, useState } from 'react';

export const useSessionManagement = () => {
  const [token, setToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return { token, refreshToken };
};
