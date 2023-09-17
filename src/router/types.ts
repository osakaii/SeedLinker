import { AuthRoutesPath } from "modules/auth/types";
import { DashboardRoutePath } from "modules/dashboard/types";
import { FranchiseRoutePath } from "modules/franchise/types";
import { UserRoutePath } from "modules/user/types";
import { CrowdfundingRoutePath } from "modules/crowdfunding/types";

export const AppRoutePath = {
  ...DashboardRoutePath,
  ...AuthRoutesPath,
  ...FranchiseRoutePath,
  ...UserRoutePath,
  ...CrowdfundingRoutePath,
};
