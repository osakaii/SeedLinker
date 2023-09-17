import api from "api";
import { User } from "./types/user";

export const getUserInfo = async () => {
  const response = await api.get<User>("accounts/users/me/");
  return response.data;
};
