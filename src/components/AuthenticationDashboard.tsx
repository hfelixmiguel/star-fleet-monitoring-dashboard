/**
 * Authentication dashboard combining all auth features
 */
import { LoginForm } from './LoginForm';
import { RoleBasedAccessControl } from './RoleBasedAccessControl';
import { OAuth2Login } from './OAuth2Login';
import { SessionManagement } from './SessionManagement';
import { PasswordReset } from './PasswordReset';

export const AuthenticationDashboard = () => {
  return (
    <div className="authentication-dashboard">
      <LoginForm />
      <RoleBasedAccessControl />
      <OAuth2Login />
      <SessionManagement />
      <PasswordReset />
    </div>
  );
};
