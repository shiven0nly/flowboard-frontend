import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Calendar, Flag, MessageSquare } from 'lucide-react';

const TaskCard = ({ task, index, onClick }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'text-danger bg-danger/10 border-danger/20';
      case 'Medium': return 'text-warning bg-warning/10 border-warning/20';
      case 'Low': return 'text-success bg-success/10 border-success/20';
      default: return 'text-text-tertiary bg-white/5 border-border';
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <Draggable draggableId={task._id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          onClick={onClick}
          className={`group bg-surface rounded-card p-12 transition-all duration-180 hover:-translate-y-1 cursor-pointer select-none border border-border-strong ${
            snapshot.isDragging ? 'shadow-skeuo-focus rotate-1 scale-[1.02] border-accent/50 z-50' : 'shadow-skeuo-out hover:shadow-skeuo-focus'
          }`}
        >
          <div className="flex flex-col gap-10">
            <div className="flex items-start justify-between gap-8">
              <h3 className="text-sm font-medium text-text-primary leading-snug group-hover:text-accent transition-colors">
                {task.title}
              </h3>
            </div>

            {task.description && (
              <p className="text-xs text-text-secondary line-clamp-2 leading-relaxed">
                {task.description}
              </p>
            )}

            <div className="flex items-center flex-wrap gap-8 pt-4">
              <span className={`text-[10px] font-bold uppercase px-6 py-2 rounded-md border ${getPriorityColor(task.priority)}`}>
                {task.priority}
              </span>

              {task.dueDate && (
                <div className="flex items-center gap-4 text-[10px] text-text-tertiary">
                  <Calendar size={10} />
                  <span>{formatDate(task.dueDate)}</span>
                </div>
              )}

              <div className="ml-auto flex items-center gap-8 opacity-0 group-hover:opacity-100 transition-opacity">
                 <div className="flex items-center gap-3 text-[10px] text-text-tertiary">
                   <MessageSquare size={10} />
                   <span>2</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
