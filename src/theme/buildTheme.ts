import { createTheme } from "@mui/material";

export default function buildTheme() {
  return createTheme({
    typography: {
      fontFamily: "Nunito, sans-serif",
      h1: {
        fontWeight: 600,
        letterSpacing: "-1.5px",
      },
      h2: {
        fontWeight: 600,
        letterSpacing: "-0.5px",
      },
      h3: {
        fontWeight: 600,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "40px",
            boxShadow: "none",
          },
        },
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            "&.Mui-selected": {
              backgroundColor: "#4432A914",
            },
            "&.Mui-selected:hover": {
              backgroundColor: "#4432A91F",
            },
            ":hover": {
              backgroundColor: "#4432A90A",
            },
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            "&.Mui-selected": {
              backgroundColor: "#4432A914",
            },
            "&.Mui-selected:hover": {
              backgroundColor: "#4432A91F",
            },
            ":hover": {
              backgroundColor: "#4432A90A",
            },
          },
        },
      },
    },
    palette: {
      primary: {
        main: "#C6C4C9",
        dark: "#717171",
        light: "#E8E7E5",
        contrastText: "#222222",
      },
      secondary: {
        main: "#4432A9",
        dark: "#302280",
        light: "#5740D9",
      },
      error: {
        main: "#F7412B",
        dark: "#C52613",
        light: "#EF5350",
      },
      warning: {
        main: "#FF922C",
        dark: "#D97C26",
        light: "#FF9800",
      },
      info: {
        main: "#0286D1",
        dark: "#0270AD",
        light: "#03A9F4",
      },
      success: {
        main: "#3FBD3D",
        dark: "#31942F",
        light: "#4CAF50",
      },
      action: {
        hover: "#4432A90A",
        selected: "#4432A914",
        focus: "#4432A91F",
      },
      text: {
        primary: "#222222",
      },
    },
  });
}
