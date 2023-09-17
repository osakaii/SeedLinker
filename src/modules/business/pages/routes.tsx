import { Route } from "react-router-dom";
import BusinessPage from "./BusinessPage";
import { BusinessRoutePath } from "./types";

export const BusinessRoutes = (
  <>
    <Route element={<BusinessPage />} path={BusinessRoutePath.Business} />
  </>
);
