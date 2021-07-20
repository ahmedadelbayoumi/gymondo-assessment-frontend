import { ThemeProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { SnackbarProvider } from 'notistack';
import LoadingProvider from 'context/Loading';

import CssBaseline from '@material-ui/core/CssBaseline';
import MomentUtils from '@date-io/moment';

import Theme from 'config/theme';
import Navigation from 'navigation';
import Loading from 'components/layout/Loading';

import '@fontsource/roboto';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      {/* Css Reset */}
      <CssBaseline />

      <MuiPickersUtilsProvider utils={MomentUtils}>
        {/* Notification Provider */}
        <SnackbarProvider>
          <LoadingProvider>
            {/* Global Loading Component */}
            <Loading />

            <Navigation />
          </LoadingProvider>
        </SnackbarProvider>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
}

export default App;
