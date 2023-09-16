import { Route } from "react-router-dom";
import { AuthRoutesPath } from "./types";
import SignUpPage from "./pages/SignUpPage";

export const AuthRoutes = (
  <>
    <Route path={AuthRoutesPath.SignUp} element={<SignUpPage />} />
    <Route path={AuthRoutesPath.SignIn} element={<SignUpPage />} />
  </>
);
