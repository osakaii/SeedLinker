import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

const router = createBrowserRouter(createRoutesFromElements(<Route></Route>));

const Router = () => <RouterProvider router={router} />;

export default Router;
