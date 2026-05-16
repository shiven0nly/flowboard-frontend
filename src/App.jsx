import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './context/AuthContext';
import { BoardProvider } from './context/BoardContext';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <BoardProvider>
          <AppRoutes />
        </BoardProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
