/**
 * OAuth2 component with Google/GitHub social providers
 */
import { useOAuth2 } from '../hooks/useOAuth2';

export const OAuth2Login = () => {
  const { signInWithGoogle, loading } = useOAuth2();

  return (
    <div className="oauth2-login">
      <button onClick={signInWithGoogle} disabled={loading}>{loading ? 'Loading...' : 'Sign in with Google'}</button>
    </div>
  );
};
