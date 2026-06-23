import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiTypography:{
      defaultProps: {
        variantMapping: {
          // Ваши маппинги
        },
      },
      styleOverrides: {
        root: {
          margin: 0, // Убирает отступы глобально для всех Typography
          padding: 0,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          margin: 0,
          padding: 0,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: 'small', // Все поля станут маленькими по умолчанию
        variant: 'outlined', // Также можно задать внешний вид (outlined, filled, standard)
      },
    },
  },
  typography: {
    fontSize: 12,
    fontFamily: 'Roboto',// "Helvetica", "Arial", sans-serif',
    
    // Можно переопределить свойства для конкретных стилей (вариантов)
    h6: {
      fontSize: '0.85rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.0rem',
      fontWeight: 650,
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 750,
    },
  },
  palette: {
    // primary: {
    //   main: '#ff5722',
    // },
    // secondary: {
    //   main: '#00bcd4',
    // },
    emptyCard: {
      main: '#b5cbfb',
    },
    fillCard: {
      main: '#98b8fe',
    },
  },
});


export const Colors = {
    primary: '#6849a7',
    warning: '#cc475a',

    light: {
        text: '#625f72',
        title: '#201e2b',
        background: '#e0dfe8',
        navBackground: '#e8e7ef',
        iconColor: '#686477',
        iconColorFocused: '#201e2b',
        uiBackground: '#2f2b3d'
    },

    dark: {
        text: '#d4d4d4',
        title: '#333',
        background: '#252231',
        navBackground: '#201e2b',
        iconColor: '#9591a5',
        iconColorFocused: '#fff',
        uiBackground: '#2f2b3d'
    }
}