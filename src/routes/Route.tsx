import { FC, memo } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

export const PrivateRoute: FC = memo(({ children }) => {
  const { user } = useAuthContext();
  return user ? <>{children}</> : <Navigate to="/login" />;
});

export const PublicRoute: FC = memo(({ children }) => {
  const { user } = useAuthContext();
  return user ? <Navigate to="/" /> : <>{children}</>;
});
