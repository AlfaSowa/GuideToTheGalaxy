import { createMuiTheme, Theme, ThemeOptions } from '@material-ui/core';

const options: ThemeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 321,
      md: 768,
      lg: 1280,
      xl: 1432,
    },
  },
};

export const theme: Theme = createMuiTheme(options);
