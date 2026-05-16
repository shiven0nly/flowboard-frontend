import React from 'react';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';
import Board from '../components/board/Board';
import { useBoard } from '../context/BoardContext';
import { Layout as LayoutIcon } from 'lucide-react';

const Dashboard = () => {
  const { currentBoard } = useBoard();

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-x-auto overflow-y-hidden relative">
          {currentBoard ? (
            <Board />
          ) : (
            <div className="h-full w-full flex flex-col items-center justify-center text-center p-24">
              <div className="w-64 h-64 bg-surface rounded-2xl flex items-center justify-center mb-24 border border-border-strong shadow-skeuo-out">
                <LayoutIcon size={32} className="text-accent" />
              </div>
              <h2 className="text-xl font-semibold text-text-primary mb-8 tracking-tight">Select a Workspace</h2>
              <p className="text-sm text-text-secondary max-w-[320px] mx-auto leading-relaxed">
                Choose a board from the sidebar or create a new one to manage your tasks efficiently.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
