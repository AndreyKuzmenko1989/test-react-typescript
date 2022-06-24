import React, { ReactChild } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../features/auth/hooks/useAuth';
import { ROUTES } from './../routes/constants';

export const PublicRoute = (children: any) => {
  const { isLoggedIn } = useAuth();
  return !isLoggedIn ? children : <Navigate to={ROUTES.main} />;
};
