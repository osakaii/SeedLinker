import { AuthRoutesPath } from "modules/auth/types";
import { DashboardRoutePath } from "modules/dashboard/types";
import { FranchiseRoutePath } from "modules/franchise/types";

export const AppRoutePath = {
  ...DashboardRoutePath,
  ...AuthRoutesPath,
  ...FranchiseRoutePath,
};
