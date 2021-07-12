import { Page404 } from '../components/pages/Page404';
import { memo, VFC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { homeRoutes } from './HomeRoutes';

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route
        path="/"
        render={({ match: { url } }) => (
          <Switch>
            {homeRoutes.map((route) => (
              <Route key={route.path} exact={route.exact} path={`${url}${route.path}`}>
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
});
