import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#202224',
    },
    secondary: {
      main: '#202224',
    },
    error: {
      main: '#FF0000'
    },
    success: {
      main: '#00B69B'
    },
    info: {
      main: '#7F56D9'
    }
  },
  typography: {
    fontFamily: 'Nunito Sans, sans-serif',
    h1:{
        fontSize: 24,
        fontWeight: 700,
        [`@media (min-width:768px)`]: {
        fontSize: 32,
      },
    },
    h2:{
      fontSize: 20,
      [`@media (min-width:768px)`]: {
      fontSize: 28,
    },
    },
    h3: {
      fontSize: 20,
      [`@media (min-width:768px)`]: {
      fontSize: 24,
      },
    },
    h4: {
      fontSize: 18,
    },
    h5: {
      fontSize: 16,
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    body1: {
      fontSize: 14,
    },
    body2: {
      fontSize: 16,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          borderRadius: 6
        },
      },
    },    
  },
});

export default theme;