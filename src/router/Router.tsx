import { AuthRoutes } from "modules/auth/routes";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Root from "./Root";
import { DashboardRoutes } from "modules/dashboard/routes";
import { FranchiseRoutes } from "modules/franchise/routes";
import { UserRoutes } from "modules/user/routes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {AuthRoutes}
      <Route path="" element={<Root />}>
        {DashboardRoutes}
        {FranchiseRoutes}
        {UserRoutes}
      </Route>
    </Route>
  )
);

const Router = () => <RouterProvider router={router} />;

export default Router;
