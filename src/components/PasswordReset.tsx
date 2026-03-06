/**
 * Password reset component for secure access control
 */
import { usePasswordReset } from '../hooks/usePasswordReset';

export const PasswordReset = () => {
  const { resetPassword, loading, error } = usePasswordReset();
  const [email, setEmail] = useState('');

  return (
    <div className="password-reset">
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <button onClick={() => resetPassword(email)} disabled={loading}>{loading ? 'Loading...' : 'Reset Password'}</button>
      {error && <div className="error">{error}</div>}
    </div>
  );
};
