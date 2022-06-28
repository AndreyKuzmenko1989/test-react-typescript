import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../features/auth/hooks/useAuth';
import { ROUTES } from './../routes/constants';

type Props = {
  children: React.ReactElement;
};

export const PrivateRoute = ({ children }: Props) => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return children ? children : <Outlet />;
  }
  return <Navigate to={ROUTES.login} />;
};
