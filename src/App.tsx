import Router from "./router/Router";
import { StoreProvider } from "store/StoreContext";

function App() {
  return (
    <StoreProvider>
      <Router />
    </StoreProvider>
  );
}

export default App;
