import { createTheme } from "@mui/material";

export const theme = createTheme({
  
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