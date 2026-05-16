import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Dropdown = ({ trigger, children, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -4 }}
            transition={{ duration: 0.12 }}
            className={`absolute right-0 mt-8 w-160 origin-top-right rounded-lg bg-surface-elevated border border-border-strong shadow-floating z-50 ${className}`}
          >
            <div className="p-4" onClick={() => setIsOpen(false)}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const DropdownItem = ({ children, onClick, icon: Icon, variant = 'default' }) => {
  const variants = {
    default: 'text-text-secondary hover:bg-white/5 hover:text-text-primary',
    danger: 'text-danger hover:bg-danger/10',
  };

  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-8 px-12 py-8 text-xs font-medium rounded-md transition-colors ${variants[variant]}`}
    >
      {Icon && <Icon size={14} />}
      {children}
    </button>
  );
};

export default Dropdown;
