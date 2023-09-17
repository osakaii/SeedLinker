import { Route } from "react-router-dom";
import { UserRoutePath } from "./types";
import UserPage from "./pages/UserPage";

export const UserRoutes = (
  <>
    <Route path={UserRoutePath.Profile} element={<UserPage />} />
  </>
);
