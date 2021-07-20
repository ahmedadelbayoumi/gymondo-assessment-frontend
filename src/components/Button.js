import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';

function GButton({ children, onClick }) {
  return (
    <Button
      fullWidth
      disableElevation
      variant="contained"
      color="primary"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

GButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default GButton;
