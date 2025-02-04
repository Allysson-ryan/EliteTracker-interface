import axios from 'axios';
import { userLocalStorageKey } from '../hooks/use-User';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config) => {
  const userData = localStorage.getItem(userLocalStorageKey);

  const token = userData && JSON.parse(userData).token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
