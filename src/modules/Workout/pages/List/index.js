import { useState, useReducer, useEffect } from 'react';
import { Box, Grid } from '@material-ui/core';

import moment from 'moment';
import useApi from 'hooks/useApi';

import Filter from 'modules/Workout/components/List/Filter';
import WorkoutCard from 'modules/Workout/components/List/WorkoutCard';
import Pagination from 'modules/Workout/components/List/Pagination';

import { getCategoryName, getStartDate } from 'modules/Workout/services/utils';

const WorkoutItemsLimit = 20;

const workoutsReducer = (state, { type, payload: { pagesCount, numberOfItems, workouts } }) => {
  switch (type) {
    case 'SET_WORKOUT_DATA':
      return {
        ...state,
        pagesCount,
        numberOfItems,
        workouts,
      };
    default:
      return state;
  }
};

export const workoutsInitialState = {
  workouts: [],
  pagesCount: 1,
  numberOfItems: 300,
};

export const initalRequestPayload = {
  params: {
    startDate: moment().format('MM/YYYY'),
    category: [],
    page: 1,
    limit: WorkoutItemsLimit,
  },
};

function WorkoutList() {
  const [startDate, setStartDate] = useState(moment());
  const [category, setCategory] = useState([]);
  const [page, setPage] = useState(1);

  const [
    {
      workouts,
      pagesCount,
      numberOfItems,
    },
    dispatch,
  ] = useReducer(workoutsReducer, workoutsInitialState);

  const [data, , getWorkouts] = useApi('/workouts', 'get', initalRequestPayload);

  useEffect(() => {
    if (data) {
      dispatch({ type: 'SET_WORKOUT_DATA', payload: data.data });
    }
  }, [data]);

  const handleSearch = (currentPage = 1) => {
    getWorkouts({
      params: {
        startDate: moment(startDate).format('MM/YYYY'),
        page: currentPage,
        limit: WorkoutItemsLimit,
        category,
      },
    });

    setPage(currentPage);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section>
      <Filter
        startDate={startDate}
        setStartDate={setStartDate}
        category={category}
        setCategory={setCategory}
        handleSearch={() => handleSearch()}
      />

      <Box my={4}>
        <Grid
          container
          justifyContent="flex-start"
          alignItems="center"
          spacing={3}
        >
          {
            workouts.map(({
              id,
              name,
              picture: { thumbnail },
              category: itemCategory,
              startDate: itemStartDate,
            }) => (
              <Grid key={id} item xs={12} sm={6} md={3}>
                <WorkoutCard
                  id={id}
                  imgUrl={thumbnail}
                  title={name}
                  category={getCategoryName(itemCategory)}
                  startDate={getStartDate(itemStartDate)}
                />
              </Grid>
            ))
          }
        </Grid>
      </Box>

      {pagesCount > 1 && (
        <Pagination
          pagesCount={pagesCount}
          page={page}
          numberOfItems={numberOfItems}
          onChange={(e, newPage) => handleSearch(newPage)}
        />
      )}
    </section>
  );
}

export default WorkoutList;
