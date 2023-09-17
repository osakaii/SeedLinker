import { Route } from "react-router-dom";
import Dashboard from "./pages/DashboardPage";
import { DashboardRoutePath } from "./types";

export const DashboardRoutes = (
  <>
    <Route element={<Dashboard />} path={DashboardRoutePath.Dashboard} />
  </>
);
