import api, { API_URL } from "api";
import { SignInForm, SignUpForm } from "modules/auth/types";
import axios from "axios";

export const signUp = async (values: SignUpForm) => {
  const response = await api.post("accounts/users/", { ...values, city: undefined, birthday: undefined });
  return response;
};

export const signIn = async (values: SignInForm) => {
  const response = await api.post<{ refresh: string; access: string }>("auth/token/", values);
  return response.data;
};

export const getAccess = async (refresh: string) => {
  const response = await axios.post(`${API_URL}auth/token/refresh/`, {
    refresh,
  });
  return response;
};
