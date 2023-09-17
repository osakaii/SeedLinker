import { Route } from "react-router-dom";
import { FranchiseRoutePath } from "./types";
import FranchisesPage from "./pages/FranchisesPage";
import FranchiseDetailPage from "./pages/FranchiseDetailPage";


export const FranchiseRoutes = (
  <>
    <Route path={FranchiseRoutePath.Franchises} element={<FranchisesPage />} />
    <Route path={FranchiseRoutePath.FranchisePage} element={<FranchiseDetailPage />} />
  </>
);
