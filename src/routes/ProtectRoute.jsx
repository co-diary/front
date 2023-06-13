import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router';
import { useRecoilValue } from 'recoil';
import { isLoggedIn } from '../atom/authRecoil';

export default function ProtectedRoute() {
  const isLogin = useRecoilValue(isLoggedIn);
  const location = useLocation();

  if (isLogin === null) {
    return null;
  }

  return isLogin ? (
    <Outlet></Outlet>
  ) : (
    <Navigate to={'/login'} replace state={{ from: location }} />
  );
}
