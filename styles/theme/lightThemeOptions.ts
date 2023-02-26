import { ThemeOptions } from '@mui/material/styles';

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#FA737D',
      contrastText: '#FFFFFF',

    }
  },
  typography: {
    fontFamily: 'brown-pro',
    h1: {
      fontSize: 'calc(28px + 0.15vw)',
      fontWeight: 700,
      color: '#181818'
    },
    h2: {
      fontSize: 'calc(24px + 0.15vw)',
      fontWeight: 700,
      color: '#181818'
    },
    h3: {
      fontSize: 'calc(20px + 0.15vw)',
      fontWeight: 400,
      color: '#181818'
    },
    h4: {
      fontSize: 'calc(18px + 0.15vw)',
      fontWeight: 400,
      color: '#181818'
    },
    body1: {
      fontSize: 'calc(14px + 0.15vw)',
      fontWeight: 400,
      color: '#181818'
    },
    body2: {
      fontSize: 'calc(12px + 0.15vw)',
      fontWeight: 400,
      color: '#181818'
    },
    subtitle1: {
      fontSize: 'calc(12px + 0.15vw)',
      fontWeight: 400,
      color: '#181818'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          paddingTop: 12,
          paddingBottom: 12,
          borderRadius: 200,
          fontWeight: 700,
          ':hover': {
            boxShadow: "0px 12px 22px rgba(0, 0, 0, 0.15)",
            background: "#FF838C"
          },
          ':disabled': {
            color: '#969695',
            background: "#DDDDDD"
          }
        },
      },
    },
  },
};

export default lightThemeOptions;