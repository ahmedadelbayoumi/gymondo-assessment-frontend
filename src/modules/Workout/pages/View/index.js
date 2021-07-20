import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import {
  Card,
  Box,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';

import useApi from 'hooks/useApi';

import Tags from 'modules/Workout/components/Tags';
import Button from 'components/Button';

import { WORKOUT_LIST } from 'navigation/helpers/CONSTANTS';
import { getCategoryName, getStartDate } from 'modules/Workout/services/utils';

const useStyles = makeStyles(({ palette }) => ({
  root: {
    margin: '32px 0',
  },
  media: {
    backgroundColor: palette.secondary.main,
    backgroundSize: 'cover',
    height: 400,
  },
}));

const initalWorkoutData = {
  category: '',
  description: '',
  name: '',
  picture: { image: '' },
  startDate: new Date(),
};

function WorkoutView() {
  const history = useHistory();
  const classes = useStyles();

  const [{
    category,
    description,
    name,
    picture: { image },
    startDate,
  }, setWorkout] = useState(initalWorkoutData);

  const { workoutId } = useParams();
  const [data, error] = useApi(`/workouts/${workoutId}`, 'get');

  useEffect(() => {
    if (data) {
      const { data: { workout: workoutInfo } } = data;
      setWorkout(workoutInfo);
    }
  }, [data, workoutId]);

  useEffect(() => {
    if (error) {
      history.push(WORKOUT_LIST);
    }
  }, [error, history]);

  return (
    <Card className={classes.root}>
      <CardMedia
        component="div"
        className={classes.media}
        image={image}
        title={name}
      />

      <CardContent>
        <Box p={2}>
          <Box mb={3}>
            <Tags left={getCategoryName(category)} right={getStartDate(startDate)} />
          </Box>

          <Typography gutterBottom variant="h4" color="primary" component="h2">
            {name}
          </Typography>

          <Typography variant="body1" color="textPrimary">
            {description}
          </Typography>
        </Box>
      </CardContent>

      <CardActions>
        <Box px={3} pb={2}>
          <Button onClick={() => history.push(WORKOUT_LIST)}>
            Back
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}

export default WorkoutView;
