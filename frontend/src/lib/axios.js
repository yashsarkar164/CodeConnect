import axios from "axios";
import { getAuth } from "@clerk/clerk-react";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

// Attach Clerk JWT token before each request
axiosInstance.interceptors.request.use(async (config) => {
  const { userId, getToken } = getAuth();

  if (userId) {
    const token = await getToken({ template: "default" });
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

export default axiosInstance;
