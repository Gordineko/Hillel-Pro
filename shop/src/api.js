import axios from "axios";

const API_URL = "https://rest-mock-server.herokuapp.com/";

export const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  if (window.token) {
    config.headers.Authorization = "Bearer" + window.token;
  }
  return config;
});

export default api;
