import { createTheme, PaletteMode, responsiveFontSizes } from '@mui/material/styles';
import variables from "./scss/variables.module.scss";

const parseColor = (colorString:string) => {
  return colorString ? colorString.trim() : '#000000'; // Fallback to black if undefined
};

let theme = (mode:PaletteMode | undefined) => {

  const headerColor = () => {
    return mode == 'light' ? variables.secondaryColor : '#9D4382';
  }


  const breakpoints = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  };
  let myTheme = createTheme({

    breakpoints: {
      values: breakpoints,
    },
    palette: {
      mode: mode,
      common: {
        black: parseColor(variables.textDark), // Always available black color
        white: parseColor(variables.textLight), // Always available white color
      },
      ...(mode === 'light'
        ? {
            primary: {
              main: parseColor(variables.primaryColor), // Golden Sunset for links, borders, buttons
            },
            secondary: {
              main: parseColor(variables.secondaryColor), // Deep Ocean Blue for section backgrounds
            },
            info: {
              main: parseColor(variables.infoColor), // Soft Lavender for accents or subtle highlights
            },
            background: {
              default: parseColor(variables.backgroundLight), // Ivory White for light mode
            },
            text: {
              primary: parseColor(variables.textLight), // Soft Black for light mode text
            },
          }
        : {
            primary: {
              main: parseColor(variables.primaryColor), // Golden Sunset for links, borders, buttons
            },
            secondary: {
              main: parseColor(variables.secondaryColor), // Lighter Blue for better contrast on dark backgrounds
            },
            info: {
              main: parseColor(variables.infoColor), // Soft Lavender, still works well on dark backgrounds
            },
            background: {
              default: parseColor(variables.backgroundDark), // Dark background for dark mode
              paper: '#1E1E1E', // Slightly lighter dark for paper components
            },
            text: {
              primary: parseColor(variables.textDark), // White for dark mode text
              secondary: '#B3B3B3', // Light gray for secondary text
            },
          }),
    },
    typography: {
      fontFamily: [
        'Ubuntu',
        'Arial',
        '"Helvetica Neue"',
      ].join(','),
      allVariants: {
        color: 'var(--foreground)',
        fontWeight: 500,
      },
      h1: {
        color: headerColor(),
        fontSize: 56,
      },
      h2: {
        color: headerColor(),
        fontSize: 48,
        marginBottom: 18,
        [`@media (min-width: ${breakpoints['md']}px)`]:  24
      },
      h3: {
        color: headerColor(),
        fontSize: 36,
      },
      h4: {
        color: headerColor(),
        fontSize: 30,
      },
      h5: {
        color: headerColor(),
        fontSize: 24,
      },
      h6: {
        color: headerColor(),
        fontSize: 20,
      },
    },
  });
  return responsiveFontSizes(myTheme)
};




export default theme;