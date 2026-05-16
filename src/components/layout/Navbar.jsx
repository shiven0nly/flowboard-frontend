import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Layout, LogOut, User } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="h-48 px-24 flex items-center justify-between bg-background z-40 sticky top-0 shadow-skeuo-out border-b border-border-strong">
      <div className="flex items-center gap-12">
        <div className="p-4 bg-surface-elevated rounded-lg border border-border-strong shadow-skeuo-out group-hover:shadow-skeuo-in transition-all duration-300">
          <img src="/logo.jpeg" alt="FlowBoard Logo" className="w-24 h-24 object-contain rounded-md" />
        </div>
        <span className="text-sm font-semibold tracking-tight text-text-primary uppercase letter-spacing-wider">
          FlowBoard
        </span>
      </div>

      <div className="flex items-center gap-16">
        <div className="flex items-center gap-8 px-12 py-2 rounded-full bg-surface border border-border-strong shadow-skeuo-in">
          <User size={14} className="text-text-tertiary" />
          <span className="text-xs font-medium text-text-secondary">{user?.name}</span>
        </div>
        
        <button 
          onClick={logout}
          className="p-8 rounded-md hover:bg-danger/10 text-text-tertiary hover:text-danger transition-all duration-150"
          title="Logout"
        >
          <LogOut size={18} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
