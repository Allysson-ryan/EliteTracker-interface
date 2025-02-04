import { Navigate } from 'react-router-dom';
import { userLocalStorageKey } from '../hooks/use-User';
import { ReactNode } from 'react';
import { Sidebar } from '../components/sidebar';
import { AppContainer } from '../components/app-container';

type PrivateRouteProps = {
  component: ReactNode;
};

export function PrivateRoute({ component }: PrivateRouteProps) {
  const userData = localStorage.getItem(userLocalStorageKey);

  if (!userData) {
    return <Navigate to="/entrar" />;
  }

  return (
    <AppContainer>
      <Sidebar />
      {component}
    </AppContainer>
  );
}
