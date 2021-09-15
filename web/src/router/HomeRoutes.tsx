import { Page404 } from '../components/pages/Page404';
import { Weather } from '../components/pages/Weather';
import { LookField } from '../components/pages/LookField';
import { SecondRegisterField } from '../components/pages/SecondRegisterField';
import { SecondaryConfirm } from '../components/pages/SecondaryConfirm';
import { SecondLogin } from '../components/pages/SecondLogin';
import { SecondSignUp } from '../components/pages/SecondSignUp';
import { Graph } from '../components/pages/Graph';
import { User } from '../components/pages/User';
import { Login } from '../components/pages/Login';
import { RegisterField } from '../components/pages/RegisterField';
import { Confirm } from '../components/pages/Confirm';
import { SignUp } from '../components/pages/SignUp';

export const homeRoutes = [
  {
    path: '/',
    exact: true,
    children: <Login />,
  },
  {
    path: '/lookfield',
    exact: true,
    children: <LookField />,
  },
  {
    path: '/lookfield/graph/:id',
    exact: false,
    children: <Graph />,
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
    exact: true,
    children: <Weather />,
  },
  {
    path: '/signup',
    exact: true,
    children: <SignUp />,
  },
  {
    path: '/user',
    exact: true,
    children: <User />,
  },
  {
    path: '/*',
    exact: false,
    children: <Page404 />,
  },
];
