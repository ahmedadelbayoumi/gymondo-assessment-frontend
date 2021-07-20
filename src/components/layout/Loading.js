import PropTypes from 'prop-types';

import { CircularProgress, Backdrop } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useIsLoading } from 'context/Loading';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

function Loading({ visible }) {
  const classes = useStyles();

  const isLoading = useIsLoading();

  return (
    <Backdrop className={classes.backdrop} open={visible || isLoading}>
      <CircularProgress color="primary" />
    </Backdrop>
  );
}

Loading.defaultProps = {
  visible: false,
};

Loading.propTypes = {
  visible: PropTypes.bool,
};

export default Loading;
