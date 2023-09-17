import { AuthRoutesPath } from "modules/auth/types";
import { DashboardRoutePath } from "modules/dashboard/types";

export const AppRoutePath = {
  ...DashboardRoutePath,
  ...AuthRoutesPath,
};
