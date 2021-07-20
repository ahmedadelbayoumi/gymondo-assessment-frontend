import moment from 'moment';
import PropTypes from 'prop-types';

import { Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import GDatePicker from 'components/form/Datepicker';
import GButton from 'components/Button';
import GSelect from 'components/form/Select';

import { categories } from 'services/staticLookups';

const useStyles = makeStyles({
  filter: {
    marginTop: '32px',
    padding: '16px',
  },
});

function Filter({
  startDate,
  setStartDate,
  category,
  setCategory,
  handleSearch,
}) {
  const classes = useStyles();

  return (
    <Paper className={classes.filter}>
      <Grid
        container
        justifyContent="space-around"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={12} sm={6}>
          <GDatePicker
            openTo="year"
            format="MM/yyyy"
            label="Start Date"
            views={['year', 'month']}
            maxDate={moment().add(12, 'month')}
            value={startDate}
            onChange={setStartDate}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <GSelect
            label="Categories"
            value={category}
            onChange={setCategory}
            options={categories}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <GButton onClick={handleSearch}>
            Search
          </GButton>
        </Grid>
      </Grid>
    </Paper>
  );
}

Filter.propTypes = {
  startDate: PropTypes.instanceOf(moment).isRequired,
  setStartDate: PropTypes.func.isRequired,
  category: PropTypes.arrayOf(PropTypes.string).isRequired,
  setCategory: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default Filter;
