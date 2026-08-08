// src/api/axios.js — Axios configured instance
import axios from "axios";

const buildApiUrl = () => {
  const envUrl = import.meta.env.VITE_API_URL?.trim();
  const isLocalDev = typeof window !== "undefined" && import.meta.env.DEV && ["localhost", "127.0.0.1"].includes(window.location.hostname);
  if (isLocalDev) return "http://localhost:5000/api";
  if (envUrl) return envUrl;
  if (typeof window !== "undefined") return `${window.location.origin}/api`;
  return "http://localhost:5000/api";
};

const api = axios.create({
  baseURL: buildApiUrl(),
});

// Log the resolved base URL for debugging 404/route issues
console.debug("api baseURL:", api.defaults.baseURL);

// Attach JWT token to every request
api.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("zanzeeUser") || "null");
  if (user?.token) config.headers.Authorization = `Bearer ${user.token}`;
  return config;
});

// Handle expired or invalid tokens globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Helpful debug info for failed requests (404/500)
    try {
      console.error("api response error:", error?.response?.status, error?.config?.method, error?.config?.url);
    } catch (e) { /* ignore logging errors */ }

    if (error.response?.status === 401) {
      const requestUrl = error.config?.url || "";
      const isAuthLogin = requestUrl.includes("/auth/login");
      if (!isAuthLogin) {
        localStorage.removeItem("zanzeeUser");
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default api;