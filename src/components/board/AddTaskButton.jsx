import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import TaskModal from './TaskModal';

const AddTaskButton = ({ status }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full flex items-center gap-10 px-12 py-10 rounded-lg text-text-tertiary hover:bg-white/5 hover:text-text-secondary transition-all duration-150 group border border-transparent hover:border-border mt-8"
      >
        <div className="p-2 rounded-md bg-white/5 group-hover:bg-accent/10 group-hover:text-accent transition-colors">
          <Plus size={14} />
        </div>
        <span className="text-xs font-medium">Add a task</span>
      </button>

      <TaskModal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        initialStatus={status}
      />
    </>
  );
};

export default AddTaskButton;
