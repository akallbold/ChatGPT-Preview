import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          backgroundColor: '#ffffff',
          borderRadius: 4,
        },
        root: {
          backgroundColor: '#ffffff',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#2A6EBB',
          fontSize: 16,
          fontWeight: 700,
          '&:hover': {
            pointer: 'cursor',
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#8DA7BE', // cadet grey
      dark: "#707078", // dark grey
    },
    secondary: {
      main: '#CDE6F5', // light blue
      light:"#428780" 
    },

    text: {
      primary: '#554640' , // dark brown
      secondary: '#FFABA2',
    },
    divider: '#00000050',
  },
  typography: {
    h1: { 
      fontSize: 24,
      fontWeight: 800,
      textAlign:'center',
      color: '#554640' ,
      letterSpacing: ".3rem",

    },
    h2: { 
      color: '#554640' ,
      fontSize: 20,
      fontWeight: 400,
    },
    h3: { 
      color:"#136A61",
      fontSize: 30,
      fontWeight: 900,

    },
    h4: {
      color:"#136A61",
      fontSize: 16,
      fontWeight: 700,
    },
    h5: {
      color:"#136A61"
    },   
    // h6: {
    //   color:"#136A61"
    // },
    body1: {
      color:"#136A61",
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1.625,
      textAlign:'left'
    },
    body2: {
      color:"#136A61",
      fontSize: 16,
      fontWeight: 800,
      textAlign:'left'
    },
    button: {
    //   color:'#136A61',
      textAlign:'left',
      margin: "0.5rem",
      padding: "0.5rem",
    },
    caption: {
      fontSize: 12,
      color:"#136A61"
    },
    subtitle1: {
      fontSize: 14,
      fontWeight: 700,
      color:"#b27771",
      textAlign: "left",
      letterSpacing: "2px",
      textTransform:"uppercase"
    },  
    fontFamily: 'Cormorant, serif',

  },
});
