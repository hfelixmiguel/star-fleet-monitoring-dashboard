/**
 * Role-based access control (RBAC) with admin/user roles and permissions
 */
import { useEffect, useState } from 'react';

export const useRoleBasedAccessControl = () => {
  const [role, setRole] = useState<'admin' | 'user'>('user');
  const [permissions, setPermissions] = useState<string[]>([]);

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    if (storedRole) {
      setRole(storedRole as 'admin' | 'user');
    }
  }, []);

  return { role, permissions };
};
