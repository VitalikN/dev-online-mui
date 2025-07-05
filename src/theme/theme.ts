import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1B5E20",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ff9800",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    text: {
      primary: "#333",
    },
  },
  typography: {
    fontFamily: `'Geist', 'Roboto', 'Arial', sans-serif`,
  },
});

export default theme;
