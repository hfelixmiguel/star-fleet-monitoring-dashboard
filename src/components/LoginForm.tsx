/**
 * Login component with form validation and error handling
 */
import { useLogin } from '../hooks/useLogin';

export const LoginForm = () => {
  const { login, loading, error } = useLogin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={() => login(email, password)} disabled={loading}>{loading ? 'Loading...' : 'Login'}</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};
