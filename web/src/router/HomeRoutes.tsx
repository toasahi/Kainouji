import { Page404 } from '../components/pages/Page404';
import { Weather } from '../components/pages/Weather';
import { LookField } from '../components/pages/LookField';
import { RegisterField } from '../components/pages/RegisterField';
import { SecondRegisterField } from '../components/pages/SecondRegisterField';
import { Home } from '../components/pages/Home';
import { Login } from '../components/pages/Login';
import { Moisture } from '../components/pages/Moisture';
import { Confirm } from '../components/pages/Confirm';
import { Register } from '../components/pages/Register';
import { SecondaryConfirm } from '../components/pages/SecondaryConfirm';
import { SignUp } from '../components/pages/SignUp';
import { SecondLogin } from '../components/pages/SecondLogin';
import { SecondSignUp } from '../components/pages/SecondSignUp';

export const homeRoutes = [
  {
    path: '/',
    exact: true,
    children: <SecondSignUp />,
  },
  {
    path: '/lookfield',
    exact: true,
    children: <LookField />,
  },
  {
    path: '/lookfield/moisture/:id',
    exact: false,
    children: <Moisture />,
  },
  {
    path: '/registerfield',
    exact: true,
    children: <SecondRegisterField />,
  },
  {
    path: '/registerfield/confirm',
    exact: false,
    children: <SecondaryConfirm />,
  },
  {
    path: '/weather',
    exact: true,
    children: <Weather />,
  },
  {
    path: '/login',
    exact: true,
    children: <SecondLogin />,
  },
  {
    path: '/signup',
    exact: true,
    children: <SecondSignUp />,
  },
  {
    path: '/*',
    exact: false,
    children: <Page404 />,
  },
];
