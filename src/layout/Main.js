import { Container } from '@material-ui/core';

import Header from 'components/layout/Header';
import WorkoutNavigation from 'modules/Workout/navigation';

function MainLayout() {
  return (
    <>
      <Header />

      <Container maxWidth="lg">
        <WorkoutNavigation />
      </Container>
    </>
  );
}

export default MainLayout;
