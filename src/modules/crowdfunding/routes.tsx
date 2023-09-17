import { Route } from "react-router-dom";
import { CrowdfundingRoutePath } from "./types";
import CrowdfundingPage from "./pages/CrowdfundingPage.tsx";
import CrowdfundingDetailPage from "./pages/CrowdfundingDetailPage.tsx";


export const CrowdfundingRoutes = (
  <>
    <Route path={CrowdfundingRoutePath.Crowdfunding} element={<CrowdfundingPage />} />
    <Route path={CrowdfundingRoutePath.CrowdfundingPage} element={<CrowdfundingDetailPage />} />
  </>
);
