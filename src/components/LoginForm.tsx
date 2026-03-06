'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem('token', data.token);
        router.push('/dashboard');
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (error) {
      setError('An error occurred');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Starfleet Access</h1>
      
      {error && (
        <div className="bg-red-500 text-white p-4 rounded mb-4">{error}</div>
      )}

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full px-4 py-2 mb-4 border rounded"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-4 py-2 mb-4 border rounded"
      />

      <button 
        type="submit" 
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
      >
        Login
      </button>
    </form>
  );
}
