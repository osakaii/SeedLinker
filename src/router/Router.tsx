import { AuthRoutes } from "modules/auth/routes";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./Root";
import { DashboardRoutes } from "modules/dashboard/routes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {AuthRoutes}
      <Route path="" element={<Root />}>
        {DashboardRoutes}
      </Route>
    </Route>
  )
);

const Router = () => <RouterProvider router={router} />;

export default Router;
