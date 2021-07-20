import { lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import WorkoutList from 'modules/Workout/pages/List';
import { WORKOUT_LIST, WORKOUT_VIEW, APP } from 'navigation/helpers/CONSTANTS';

const WorkoutView = lazy(() => import('modules/Workout/pages/View'));

function WorkoutNavigation() {
  return (
    <Switch>
      <Route path={WORKOUT_VIEW} component={WorkoutView} />

      <Route path={WORKOUT_LIST} component={WorkoutList} />

      <Route path={APP}>
        <Redirect to={WORKOUT_LIST} />
      </Route>
    </Switch>
  );
}

export default WorkoutNavigation;
