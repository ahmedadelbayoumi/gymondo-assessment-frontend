import { createTheme } from '@material-ui/core/styles';

// Mateial UI Theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#ff7f66',
    },
    secondary: {
      main: '#ffcb74',
    },
    text: {
      primary: '#555',
      secondary: '#ff7f66',
    },
    background: {
      default: '#f9f6f4',
    },
  },
  overrides: {
    MuiPaper: {
      elevation1: {
        boxShadow: '0 4px 21px 0 rgba(0, 0, 0, 0.07)',
      },
    },
    MuiButton: {
      containedPrimary: {
        color: 'white',
        fontWeight: 'bold',
      },
    },
    MuiCard: {
      root: {
        borderRadius: '8px',
      },
    },
  },
});

export default theme;
