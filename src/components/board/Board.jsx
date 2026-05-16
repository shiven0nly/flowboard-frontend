import React, { useEffect, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useBoard } from '../../context/BoardContext';
import Column from './Column';
import TaskModal from './TaskModal';
import Loader from '../ui/Loader';
import { Filter, MoreHorizontal, Settings2 } from 'lucide-react';

const Board = () => {
  const { currentBoard, tasks, fetchTasks, loading, reorderTasks } = useBoard();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    if (currentBoard) {
      fetchTasks(currentBoard._id);
    }
  }, [currentBoard]);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) return;

    const sourceCol = source.droppableId;
    const destCol = destination.droppableId;

    // Filter tasks by columns and sort to match UI
    const sourceTasks = tasks.filter(t => t.status === sourceCol).sort((a, b) => a.order - b.order);
    const destTasks = sourceCol === destCol ? sourceTasks : tasks.filter(t => t.status === destCol).sort((a, b) => a.order - b.order);

    const taskToMove = sourceTasks[source.index];
    if (!taskToMove) return;

    // Remove from source column array
    sourceTasks.splice(source.index, 1);
    
    // Update status
    taskToMove.status = destCol;
    
    // Add to destination column array
    if (sourceCol === destCol) {
      sourceTasks.splice(destination.index, 0, taskToMove);
    } else {
      destTasks.splice(destination.index, 0, taskToMove);
    }

    // Combine all tasks back, updating the modified ones
    const otherTasks = tasks.filter(t => t.status !== sourceCol && t.status !== destCol);
    
    // Reconstruct the full list
    const updatedTasks = [...otherTasks, ...sourceTasks];
    if (sourceCol !== destCol) {
      updatedTasks.push(...destTasks);
    }

    // Call reorder API/Context
    reorderTasks(updatedTasks);
  };

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const columns = ['Todo', 'In Progress', 'Done'];

  if (loading && tasks.length === 0) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <Loader size="lg" />
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col fade-in">
      {/* Board Header */}
      <div className="px-24 py-16 flex items-center justify-between border-b border-border bg-background/50 backdrop-blur-sm sticky top-0 z-20">
        <div className="flex items-center gap-16">
          <h1 className="text-xl font-bold text-text-primary tracking-tight">{currentBoard?.title}</h1>
          <div className="flex items-center gap-8 ml-8">
            <button className="flex items-center gap-4 px-8 py-4 rounded-md hover:bg-white/5 text-[11px] font-medium text-text-secondary transition-colors">
              <Filter size={12} />
              <span>Filter</span>
            </button>
            <button className="flex items-center gap-4 px-8 py-4 rounded-md hover:bg-white/5 text-[11px] font-medium text-text-secondary transition-colors">
              <Settings2 size={12} />
              <span>View</span>
            </button>
          </div>
        </div>

        <button className="p-8 rounded-md hover:bg-white/5 text-text-tertiary transition-colors">
          <MoreHorizontal size={18} />
        </button>
      </div>

      {/* Board Content */}
      <div className="flex-1 overflow-x-auto p-24 scrollbar-thin">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="flex gap-16 h-full min-w-max">
            {columns.map((columnId) => (
              <Column 
                key={columnId} 
                id={columnId} 
                title={columnId} 
                tasks={tasks.filter(t => t.status === columnId)} 
                onTaskClick={handleTaskClick}
              />
            ))}
          </div>
        </DragDropContext>
      </div>

      <TaskModal 
        isOpen={isModalOpen} 
        onClose={() => {
          setIsModalOpen(false);
          setSelectedTask(null);
        }} 
        task={selectedTask}
      />
    </div>
  );
};

export default Board;
