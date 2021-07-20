import {
  Box,
  Typography,
  ButtonBase,
  Divider,
} from '@material-ui/core';

import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Tags from 'modules/Workout/components/Tags';

const useStyles = makeStyles(({ palette }) => ({
  card: ({ imgUrl }) => ({
    backgroundColor: palette.secondary.main,
    backgroundImage: `url(${imgUrl})`,
    backgroundSize: 'cover',
    boxShadow: '0 4px 21px 0 rgba(0, 0, 0, 0.3)',
  }),
  buttonBase: {
    width: '100%',
    transition: 'transform 250ms ease-in-out',
    '&:hover': {
      transform: 'scale3d(1.05, 1.05, 1)',
    },
  },
  divider: {
    width: '100%',
    marginTop: '24px',
    marginBottom: '8px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
}));

function WorkoutCard({
  id,
  imgUrl,
  title,
  category,
  startDate,
}) {
  const history = useHistory();
  const classes = useStyles({ imgUrl });

  return (
    <ButtonBase
      className={classes.buttonBase}
      onClick={() => history.push(`/app/workout/${id}`)}
    >
      <Box
        p={2}
        width={1}
        height={300}
        borderRadius={8}
        className={classes.card}
        display="flex"
        alignItems="start"
        justifyContent="flex-end"
        flexDirection="column"
        color="white"
      >
        <Typography variant="h4" align="left">
          {title}
        </Typography>

        <Divider className={classes.divider} />

        <Tags left={category} right={startDate} />
      </Box>
    </ButtonBase>
  );
}

WorkoutCard.propTypes = {
  id: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
};

export default WorkoutCard;
