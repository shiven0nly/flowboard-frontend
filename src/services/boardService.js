import api from './api';

export const getBoards = async () => {
  const { data } = await api.get('/api/boards');
  return data;
};

export const createBoard = async (title) => {
  const { data } = await api.post('/api/boards', { title });
  return data;
};

export const deleteBoard = async (id) => {
  const { data } = await api.delete(`/api/boards/${id}`);
  return data;
};

export const getTasks = async (boardId) => {
  const { data } = await api.get(`/api/tasks/${boardId}`);
  return data;
};

export const createTask = async (taskData) => {
  const { data } = await api.post('/api/tasks', taskData);
  return data;
};

export const updateTask = async (id, taskData) => {
  const { data } = await api.put(`/api/tasks/${id}`, taskData);
  return data;
};

export const deleteTask = async (id) => {
  const { data } = await api.delete(`/api/tasks/${id}`);
  return data;
};

export const reorderTasks = async (tasks) => {
  const { data } = await api.put('/api/tasks/reorder', { tasks });
  return data;
};
