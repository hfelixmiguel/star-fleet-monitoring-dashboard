/**
 * Role-based access control component with admin/user roles and permissions
 */
import { useRoleBasedAccessControl } from '../hooks/useRoleBasedAccessControl';

export const RoleBasedAccessControl = () => {
  const { role, permissions } = useRoleBasedAccessControl();

  return (
    <div className="role-based-access-control">
      <h2>Current Role: {role}</h2>
      <p>Permissions: {permissions.join(', ')}</p>
    </div>
  );
};
