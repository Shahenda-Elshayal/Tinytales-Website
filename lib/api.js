import axios from 'axios';

// Base URL from Postman collection
const BASE_URL = 'https://tinytales.trendline.marketing/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Accept': 'application/json',
  },
});

// Request interceptor: Add token to all requests if available
api.interceptors.request.use(
  (config) => {
    // Check if we're in browser environment
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        // Add Bearer token to Authorization header (as shown in Postman)
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor: Handle errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle 401 (unauthorized) - redirect to login
    if (error.response?.status === 401) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export default api;

