import { createContext, type PropsWithChildren, useContext } from "react";
import { type Store, store } from "store/Store";
import { useSuspense } from "use-react-suspense";

const StoreContext = createContext<Store | undefined>(undefined);

export const StoreProvider = ({ children }: PropsWithChildren) => {
  const [data] = useSuspense(() => store.init(), []);

  return <StoreContext.Provider value={data}>{children}</StoreContext.Provider>;
};

export function useStore() {
  const storeInstance = useContext(StoreContext);
  if (!storeInstance) {
    throw new Error("useStore is used outside of StoreProvider");
  }
  return storeInstance;
}
