import React, { useState, useEffect } from 'react';
import Modal from '../ui/Modal';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { useBoard } from '../../context/BoardContext';
import { Calendar, Flag, Trash2, CheckCircle2, Clock, AlertCircle } from 'lucide-react';

const TaskModal = ({ isOpen, onClose, task }) => {
  const { createTask, updateTask, deleteTask, currentBoard } = useBoard();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Todo');
  const [priority, setPriority] = useState('Medium');
  const [dueDate, setDueDate] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description || '');
      setStatus(task.status);
      setPriority(task.priority);
      setDueDate(task.dueDate ? new Date(task.dueDate).toISOString().split('T')[0] : '');
    } else {
      setTitle('');
      setDescription('');
      setStatus('Todo');
      setPriority('Medium');
      setDueDate('');
    }
  }, [task, isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (task) {
        await updateTask(task._id, { title, description, status, priority, dueDate });
      } else {
        await createTask({ title, description, status, priority, dueDate, boardId: currentBoard._id });
      }
      onClose();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setLoading(true);
      try {
        await deleteTask(task._id);
        onClose();
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title={task ? 'Edit Task' : 'Create New Task'}
    >
      <form onSubmit={handleSubmit} className="space-y-24">
        <Input 
          label="Task Title"
          placeholder="What needs to be done?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <div className="flex flex-col gap-8">
          <label className="text-xs font-medium text-text-secondary ml-4">Description</label>
          <textarea 
            className="input-field min-h-[120px] resize-none"
            placeholder="Add a detailed description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-16">
          <div className="space-y-8">
            <label className="text-xs font-medium text-text-secondary ml-4 flex items-center gap-6">
              <Flag size={12} /> Priority
            </label>
            <div className="flex gap-4 bg-background rounded-lg p-4 border border-border-strong shadow-skeuo-in">
              {['Low', 'Medium', 'High'].map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPriority(p)}
                  className={`flex-1 py-6 text-[10px] font-bold uppercase rounded-md transition-all ${
                    priority === p 
                      ? 'bg-gradient-to-b from-accent to-accent-active text-background shadow-skeuo-out border border-accent/50' 
                      : 'text-text-tertiary hover:text-text-secondary bg-surface-elevated border border-transparent shadow-skeuo-in'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <label className="text-xs font-medium text-text-secondary ml-4 flex items-center gap-6">
              <CheckCircle2 size={12} /> Status
            </label>
            <div className="flex gap-4 bg-background rounded-lg p-4 border border-border-strong shadow-skeuo-in">
              {['Todo', 'In Progress', 'Done'].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setStatus(s)}
                  className={`flex-1 py-6 text-[10px] font-bold uppercase rounded-md transition-all ${
                    status === s 
                      ? 'bg-gradient-to-b from-text-secondary to-text-tertiary text-background shadow-skeuo-out border border-text-secondary/50' 
                      : 'text-text-tertiary hover:text-text-secondary bg-surface-elevated border border-transparent shadow-skeuo-in'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="col-span-2 text-white">
            <Input 
              label="Due Date"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center justify-between pt-16 border-t border-border mt-32">
          {task && (
            <button
              type="button"
              onClick={handleDelete}
              className="flex items-center gap-8 text-xs font-medium text-danger hover:text-danger/80 transition-colors"
            >
              <Trash2 size={14} />
              <span>Delete Task</span>
            </button>
          )}
          <div className="flex items-center gap-12 ml-auto">
            <Button variant="ghost" type="button" onClick={onClose}>Cancel</Button>
            <Button variant="primary" type="submit" loading={loading}>
              {task ? 'Update Task' : 'Create Task'}
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default TaskModal;
