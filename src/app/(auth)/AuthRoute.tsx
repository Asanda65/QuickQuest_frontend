'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../contexts/AuthContext';
import Loader from '@/components/Loader';

interface AuthRouteProps {
  children: React.ReactNode;
}

const AuthRoute: React.FC<AuthRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    router.push('/login');
    return null;
  }

  if (user.status === 'UNVERIFIED') {
    router.push('/verifyEmail');
    return null;
  }
  if (user.status === 'GOOGLEAUTH') {
    router.push('/ssoSignup');
    return null;
  }

  return <>{children}</>;
};

export default AuthRoute;