"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1F1717",
      //  bac: "#CE5A67"
    },
    secondary: {
      main: "#989898",
    },
    whitebackground: {
      main: "#ffffff",
    },
    background: {
      main: "#F4BF96",
    },
    backgroundtext: {
      main: "#F4BF96",
    },
  },
  typography: {
    fontFamily: "inherit",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
