import {
  Box,
  Paper,
  Typography,
  useMediaQuery,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import Pagination from '@material-ui/lab/Pagination';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  ul: {
    '& .Mui-selected': {
      color: 'white',
    },
  },
}));

function WorkoutPagination({
  pagesCount, page, onChange, numberOfItems,
}) {
  const classes = useStyles();
  const isXsScreen = useMediaQuery((theme) => theme.breakpoints.only('xs'));

  return (
    <Paper>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        mb={4}
        p={2}
      >
        <Pagination
          color="primary"
          shape="rounded"
          size={isXsScreen ? 'small' : 'large'}
          count={pagesCount}
          page={page}
          onChange={onChange}
          classes={{
            ul: classes.ul,
          }}
        />

        <Box mt={2}>
          <Typography variant="subtitle2" color="primary">
            {numberOfItems}
            {' '}
            Workouts
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}

WorkoutPagination.propTypes = {
  pagesCount: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  numberOfItems: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default WorkoutPagination;
