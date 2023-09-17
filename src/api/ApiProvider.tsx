import { ChildrenProps } from "types/common";
import { QueryClientProvider, QueryClient } from "react-query";

const client = new QueryClient();

export const QueryProvider = ({ children }: ChildrenProps) => <QueryClientProvider client={client}>{children}</QueryClientProvider>;
