import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';

const BoardContext = createContext();

export const BoardProvider = ({ children }) => {
  const { user } = useAuth();
  const [boards, setBoards] = useState([]);
  const [currentBoard, setCurrentBoard] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user) {
      setBoards([]);
      setCurrentBoard(null);
      setTasks([]);
    }
  }, [user]);

  const fetchBoards = async () => {
    if (!user) return;
    const { data } = await axios.get('/api/boards', {
      headers: { Authorization: `Bearer ${user.token}` }
    });
    setBoards(data);
  };

  const fetchTasks = async (boardId) => {
    setLoading(true);
    const { data } = await axios.get(`/api/tasks/${boardId}`, {
      headers: { Authorization: `Bearer ${user.token}` }
    });
    setTasks(data);
    setLoading(false);
  };

  const createBoard = async (title) => {
    const { data } = await axios.post('/api/boards', { title }, {
      headers: { Authorization: `Bearer ${user.token}` }
    });
    setBoards([...boards, data]);
    return data;
  };

  const createTask = async (taskData) => {
    const { data } = await axios.post('/api/tasks', taskData, {
      headers: { Authorization: `Bearer ${user.token}` }
    });
    setTasks([...tasks, data]);
    return data;
  };

  const updateTask = async (taskId, taskData) => {
    const { data } = await axios.put(`/api/tasks/${taskId}`, taskData, {
      headers: { Authorization: `Bearer ${user.token}` }
    });
    setTasks(tasks.map(t => t._id === taskId ? data : t));
    return data;
  };

  const deleteTask = async (taskId) => {
    await axios.delete(`/api/tasks/${taskId}`, {
      headers: { Authorization: `Bearer ${user.token}` }
    });
    setTasks(tasks.filter(t => t._id !== taskId));
  };

  const reorderTasks = async (newTasks) => {
    setTasks(newTasks);
    await axios.put('/api/tasks/reorder', { tasks: newTasks.map((t, idx) => ({ _id: t._id, order: idx, status: t.status })) }, {
      headers: { Authorization: `Bearer ${user.token}` }
    });
  };

  return (
    <BoardContext.Provider value={{ 
      boards, 
      currentBoard, 
      setCurrentBoard, 
      tasks, 
      loading, 
      fetchBoards, 
      fetchTasks, 
      createBoard, 
      createTask,
      updateTask,
      deleteTask,
      reorderTasks
    }}>
      {children}
    </BoardContext.Provider>
  );
};

export const useBoard = () => useContext(BoardContext);
