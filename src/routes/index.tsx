import { createBrowserRouter } from 'react-router-dom';
import { Login } from './../screens/login';
import { Habits } from '../screens/habits';
import { Auth } from '../screens/auth';
import { PrivateRoute } from './private-route';
import { Focus } from '../screens/focus';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PrivateRoute component={<Habits />} />,
  },
  {
    path: '/foco',
    element: <PrivateRoute component={<Focus />} />,
  },
  {
    path: '/entrar',
    element: <Login />,
  },
  {
    path: '/autenticacao',
    element: <Auth />,
  },
]);
