import React, { useEffect } from 'react';
import { useBoard } from '../../context/BoardContext';
import { Layout, Plus, Search, Settings, Hash } from 'lucide-react';

const Sidebar = () => {
  const { boards, currentBoard, setCurrentBoard, fetchBoards, createBoard } = useBoard();

  useEffect(() => {
    fetchBoards();
  }, []);

  const handleCreateBoard = async () => {
    const title = prompt('Enter board title:');
    if (title) {
      await createBoard(title);
    }
  };

  return (
    <aside className="w-260 border-r border-border-strong h-[calc(100vh-56px)] bg-sidebar flex flex-col z-30 shadow-skeuo-in">
      <div className="p-16">
        <div className="relative mb-24">
          <Search size={14} className="absolute left-12 top-1/2 -translate-y-1/2 text-text-tertiary" />
          <input 
            type="text" 
            placeholder="Search boards..." 
            className="w-full bg-surface border border-border-strong shadow-skeuo-in rounded-md pl-32 pr-12 py-6 text-xs text-text-primary focus:outline-none focus:border-accent/30 focus:shadow-skeuo-focus transition-all"
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between px-8 mb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-text-tertiary">Workspaces</span>
            <button 
              onClick={handleCreateBoard}
              className="p-4 rounded-md hover:bg-white/10 text-text-tertiary hover:text-text-primary transition-colors"
            >
              <Plus size={14} />
            </button>
          </div>

          {boards.map((board) => (
            <button
              key={board._id}
              onClick={() => setCurrentBoard(board)}
              className={`w-full flex items-center gap-10 px-12 py-8 rounded-md text-sm font-medium transition-all duration-150 group relative ${
                currentBoard?._id === board._id 
                  ? 'bg-accent/5 text-accent border border-accent/10' 
                  : 'text-text-secondary hover:bg-white/5 hover:text-text-primary border border-transparent'
              }`}
            >
              {currentBoard?._id === board._id && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-16 bg-accent rounded-r-full" />
              )}
              <Hash size={16} className={currentBoard?._id === board._id ? 'text-accent' : 'text-text-tertiary group-hover:text-text-secondary'} />
              <span className="truncate">{board.title}</span>
            </button>
          ))}

          {boards.length === 0 && (
            <div className="px-12 py-16 text-center border border-dashed border-border rounded-lg">
              <p className="text-[11px] text-text-tertiary">No boards yet.</p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-auto p-16 border-t border-border">
        <button className="w-full flex items-center gap-10 px-12 py-8 rounded-md text-sm font-medium text-text-secondary hover:bg-white/5 hover:text-text-primary transition-all duration-150">
          <Settings size={16} />
          <span>Settings</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
