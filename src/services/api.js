import axios from 'axios';

const apiHost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  ? '/'
  : `${window.location.protocol}//${window.location.hostname}:5000/`;

const api = axios.create({
  baseURL: apiHost,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor for authentication
api.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem('flowboard_user'));
    if (user && user.token) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle unauthorized errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('flowboard_user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
