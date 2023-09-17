import { Route } from "react-router-dom";
import { AuthRoutesPath } from "./types";
import SignUpPage from "./pages/SignUpPage";
import SignUpFinishPage from "./pages/SignUpFinishPage";
import SignInPage from "./pages/SignInPage";

export const AuthRoutes = (
  <>
    <Route path={AuthRoutesPath.SignUp} element={<SignUpPage />} />
    <Route path={AuthRoutesPath.SignUpFinish} element={<SignUpFinishPage />} />
    <Route path={AuthRoutesPath.SignIn} element={<SignInPage />} />
  </>
);
