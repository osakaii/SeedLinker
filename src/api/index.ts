import axios from "axios";
import { store } from "store/Store";

export const API_URL = "http://161.35.168.100/api/v1/";

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(
  async (config) => {
    const {
      auth: { accessToken: access },
    } = await store.init();
    if (access) {
      config.headers.Authorization = `Bearer ${access}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const {
      auth: { setAccessToken, refreshToken, logout },
    } = await store.init();

    if (error.response.status === 401) {
      if (!originalRequest._retry) {
        originalRequest._retry = true;
        try {
          const response = await axios.post(`${API_URL}auth/token/refresh/`, {
            refresh: refreshToken,
          });
          const { access } = response.data;
          setAccessToken(access);

          originalRequest.headers.Authorization = `Bearer ${access}`;
          return axios(originalRequest);
        } catch (err) {
          console.error("AUTH ERROR", err);
        }
      } else {
        logout();
        return error;
      }
    }
    return Promise.reject(error);
  }
);

export default api;
