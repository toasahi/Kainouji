import { Page404 } from '../components/pages/Page404';
import { Weather } from '../components/pages/Weather';
import { LookField } from '../components/pages/LookField';
import { RegisterField } from '../components/pages/RegisterField';
import { Home } from '../components/pages/Home';
import { Login } from '../components/pages/Login';
import { Moisture } from '../components/pages/Moisture';
import { Confirm } from '../components/pages/Confirm';

export const homeRoutes = [
  {
    path: '/',
    exact: true,
    children: <Home />,
  },
  {
    path: '/lookfield',
    exact: true,
    children: <LookField />,
  },
  {
    path: '/lookfield/moisture',
    exact: false,
    children: <Moisture />,
  },
  {
    path: '/registerfield',
    exact: true,
    children: <RegisterField />,
  },
  {
    path: '/registerfield/confirm',
    exact: false,
    children: <Confirm />,
  },
  {
    path: '/weather',
    exact: false,
    children: <Weather />,
  },
  {
    path: '/login',
    exact: false,
    children: <Login />,
  },
  {
    path: '/*',
    exact: false,
    children: <Page404 />,
  },
];
