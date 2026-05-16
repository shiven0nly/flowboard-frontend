import api from './api';

export const login = async (email, password) => {
  const { data } = await api.post('/api/auth/login', { email, password });
  return data;
};

export const register = async (name, email, password) => {
  const { data } = await api.post('/api/auth/register', { name, email, password });
  return data;
};

export const getProfile = async () => {
  const { data } = await api.get('/api/auth/profile');
  return data;
};
