import { Suspense } from 'react';
import {
  HashRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import MainLayout from 'layout/Main';
import Loading from 'components/layout/Loading';
import ScrollToTop from 'navigation/helpers/ScrollToTop';

import { ROOT, APP } from './helpers/CONSTANTS';

function MainNavigation() {
  return (
    <HashRouter>
      <ScrollToTop />

      <Suspense fallback={<Loading visible />}>
        <Switch>
          <Route path={APP}>
            <MainLayout />
          </Route>

          <Route path={ROOT}>
            <Redirect to={APP} />
          </Route>
        </Switch>
      </Suspense>
    </HashRouter>
  );
}

export default MainNavigation;
