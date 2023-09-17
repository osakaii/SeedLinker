import { QueryProvider } from "api/ApiProvider";
import Router from "./router/Router";
import { StoreProvider } from "store/StoreContext";

function App() {
  return (
    <QueryProvider>
      <StoreProvider>
        <Router />
      </StoreProvider>
    </QueryProvider>
  );
}

export default App;
