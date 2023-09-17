import buildTheme from "theme/buildTheme";
import Router from "./router/Router";
import { ThemeProvider } from "@mui/material";
import { StoreProvider } from "store/StoreContext";

const theme = buildTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StoreProvider>
        <Router />
      </StoreProvider>
    </ThemeProvider>
  );
}

export default App;
