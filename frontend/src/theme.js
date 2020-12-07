/**
 * Theme for applying consistent styling to the app
 */

export default {
  /**
   * Font
   */
  font: {
    family: "'Open Sans', sans-serif",
    weight: {
      light: '300',
      normal: '400',
      bold: '600',
    },
    size: {
      tiny: '11px',
      xxs: '13px',
      xs: '14px',
      sm: '16px',
      md: '18px',
      lg: '20px',
      xl: '34px',
      xxl: '48px',
    },
  },

  /**
   * Colors
   */
  colors: {
    black: '#2C2C2E',
    white: '#fff',
    success: '#34C759',
    body: '#F2F2F7',

    primary: {
      light: '#FFD60A',
      main: '#FFCC00',
      dark: '#FFC200',
      contrastText: '#fff',
    },

    secondary: {
      light: '#FF375F',
      main: '#FF2D55',
      dark: '#FF234B',
      contrastText: '#fff',
    },

    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
    },

    border: {
      light: '#f5f5f5',
      main: '#e0e0e0',
      dark: '#bdbdbd',
    },

    error: {
      light: '#FF453A',
      main: '#FF3B30',
      dark: '#FF3126',
      contrastText: '#fff',
    },

    warning: '#FF9F0A',

    info: '#5E5CE6',

    grey: {
      50: '#FAFAFD',
      100: '#F5F5F7',
      200: '#F2F2F7',
      300: '#E5E5EA',
      400: '#C7C7CC',
      500: '#8E8E93',
      600: '#757578',
      700: '#636366',
      800: '#48484A',
      900: '#242426',
    },
  },

  /**
   * Shadows
   */
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    md: 'rgba(0, 0, 0, 0.3) 0px 1px 8px 0px',
    lg: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    xl: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  },

  /**
   * Breakpoints
   */
  screen: {
    xs: '540px',
    sm: '640px',
    md: '1007px',
    lg: '1100px',
    xl: '1230px',
  },

  /**
   * Spacing
   */
  spacing: {
    none: 0,
    xxs: '5px',
    xs: '10px',
    sm: '20px',
    md: '30px',
    lg: '40px',
    xl: '60px',
  },

  /**
   * Radius
   */
  radius: {
    sm: '3px',
    md: '6px',
    lg: '12px',
  },

  /**
   * zIndex
   */
  zIndex: {
    xs: 10,
    sm: 20,
    md: 30,
    lg: 40,
    xl: 50,
  },
};
