import PropTypes from 'prop-types';

import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  menuItem: {
    padding: '15px 20px',
  },
});

function GSelect({
  label,
  value,
  onChange,
  options,
}) {
  const classes = useStyles();

  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel id="input-label">
        {label}
      </InputLabel>

      <Select
        fullWidth
        multiple
        labelId="input-label"
        label={label}
        value={value}
        onChange={({ target: { value: newValue } }) => onChange(newValue)}
      >
        {options.map(({ name, value: key }) => (
          <MenuItem
            className={classes.menuItem}
            key={key}
            value={key}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

GSelect.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GSelect;
