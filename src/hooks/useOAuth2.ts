/**
 * OAuth2 integration with Google/GitHub social providers
 */
import { useState } from 'react';

export const useOAuth2 = () => {
  const [loading, setLoading] = useState(false);

  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/auth/google', {
        method: 'GET'
      });
      return await response.json();
    } finally {
      setLoading(false);
    }
  };

  return { signInWithGoogle, loading };
};
