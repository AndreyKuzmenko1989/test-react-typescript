import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../features/auth/hooks/useAuth';
import { ROUTES } from './constants';

type Props = {
  children: React.ReactElement;
};

export const PublicRoute = ({ children }: Props) => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Navigate to={ROUTES.main} replace />;
  }

  return children ? children : <Outlet />;
};
