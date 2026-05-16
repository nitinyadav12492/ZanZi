// src/api/axios.js — Axios configured instance
import axios from "axios";

const api = axios.create({
  baseURL: (import.meta.env.VITE_API_URL || "http://localhost:5000/api").trim(),
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
      localStorage.removeItem("zanzeeUser");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;