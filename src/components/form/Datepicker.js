import { DatePicker } from '@material-ui/pickers';

function GDatePicker(props) {
  return (
    <DatePicker
      disableToolbar
      disablePast
      autoOk
      fullWidth
      margin="none"
      variant="inline"
      inputVariant="outlined"
      color="primary"
      {...props}
    />
  );
}

export default GDatePicker;
