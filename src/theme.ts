import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#27272A',
    },
    secondary: {
      main: '#ffffff',
    },
    info: {
      main: '#A1A1AA',
    },

    background: {
      default: '#202124',
      paper: '#27272A',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#A1A1AA',
    },
  },
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: '#A1A1AA',
            '&:hover': {
              backgroundColor: '#A1A1AA',
            },
          },
          '&:hover': {
            backgroundColor: '#49494a',
          },
        },
      },
    },
  },
});

export default theme;
