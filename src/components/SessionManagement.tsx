/**
 * Session management component with JWT tokens and refresh token rotation
 */
import { useSessionManagement } from '../hooks/useSessionManagement';

export const SessionManagement = () => {
  const { token, refreshToken } = useSessionManagement();

  return (
    <div className="session-management">
      <h2>Session Status</h2>
      <p>Token: {token ? 'Active' : 'Inactive'}</p>
    </div>
  );
};
