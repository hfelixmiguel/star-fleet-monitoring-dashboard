'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    setIsLoggingOut(true);
    localStorage.removeItem('token');
    router.push('/login');
  };

  return (
    <button 
      onClick={handleLogout}
      disabled={isLoggingOut}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
    >
      Logout
    </button>
  );
}
