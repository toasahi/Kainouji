import { Moisture } from '../components/pages/Moisture';
import { Page404 } from '../components/pages/Page404';
import { Weather } from '../components/pages/Weather';

export const homeRoutes = [
  {
    path: '/',
    exact: true,
    children: <Moisture />,
  },
  {
    path: '/moisture',
    exact: false,
    children: <Moisture />,
  },
  {
    path: '/weather',
    exact: false,
    children: <Weather />,
  },
  {
    path: '/*',
    exact: false,
    children: <Page404 />,
  },
];
