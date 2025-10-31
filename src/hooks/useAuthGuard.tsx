import { useRouter } from 'next/router';
import { useAuth } from '../contexts/AuthContext';
import { useEffect } from 'react';

export function useAuthGuard(requiredRole?: string) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.replace('/login');
    if (requiredRole && user?.role !== requiredRole) router.replace('/not-authorized');
  }, [user]);
}
