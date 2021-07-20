import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';

const useStyles = makeStyles({
  tag: {
    borderRadius: '16px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '5px 10px',
    fontWeight: 'bold',
  },
});

function Tags({ left, right }) {
  const classes = useStyles();

  return (
    <Box display="flex" width={1} alignItems="center" justifyContent="space-between">
      <Typography
        className={classes.tag}
        color="primary"
        variant="subtitle2"
        align="left"
      >
        {left}
      </Typography>

      <Typography
        className={classes.tag}
        color="secondary"
        variant="subtitle2"
        align="left"
      >
        {right}
      </Typography>
    </Box>
  );
}

Tags.propTypes = {
  left: PropTypes.string.isRequired,
  right: PropTypes.string.isRequired,
};

export default Tags;
