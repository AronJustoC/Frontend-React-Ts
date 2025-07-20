import axios from "axios";
import { store } from "../store";

const API_URL = "http://localhost:4000/";

export const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
axiosClient.interceptors.request.use(function (config) {
  const state = store.getState();
  const token = state.authState.token;
  if (config && config.headers && token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosClient;
