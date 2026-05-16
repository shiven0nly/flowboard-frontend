import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';
import AddTaskButton from './AddTaskButton';
import { MoreHorizontal, Plus } from 'lucide-react';

const Column = ({ id, title, tasks, onTaskClick }) => {
  const getColumnColor = (title) => {
    switch (title) {
      case 'Todo': return 'bg-text-tertiary';
      case 'In Progress': return 'bg-accent';
      case 'Done': return 'bg-success';
      default: return 'bg-text-tertiary';
    }
  };

  return (
    <div className="w-320 flex flex-col h-full bg-surface-elevated rounded-xl border border-border-strong shadow-skeuo-in">
      <div className="p-12 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <div className={`w-8 h-8 rounded-full ${getColumnColor(title)} shadow-[0_0_8px_rgba(0,0,0,0.5)]`} />
          <h2 className="text-xs font-bold uppercase tracking-widest text-text-secondary">{title}</h2>
          <span className="text-[10px] font-medium bg-white/5 text-text-tertiary px-6 py-2 rounded-md border border-border">
            {tasks.length}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-4 rounded-md hover:bg-white/10 text-text-tertiary transition-colors">
            <Plus size={14} />
          </button>
          <button className="p-4 rounded-md hover:bg-white/10 text-text-tertiary transition-colors">
            <MoreHorizontal size={14} />
          </button>
        </div>
      </div>

      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={`flex-1 p-8 space-y-12 overflow-y-auto scrollbar-none transition-colors duration-200 ${
              snapshot.isDraggingOver ? 'bg-white/[0.03]' : ''
            }`}
          >
            {tasks.map((task, index) => (
              <TaskCard 
                key={task._id} 
                task={task} 
                index={index} 
                onClick={() => onTaskClick(task)}
              />
            ))}
            {provided.placeholder}
            <AddTaskButton status={id} />
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
