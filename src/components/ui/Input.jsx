import React from 'react';

const Input = ({ label, error, className = '', ...props }) => {
  return (
    <div className={`flex flex-col gap-8 ${className}`}>
      {label && <label className="text-xs font-medium text-text-secondary ml-4">{label}</label>}
      <input 
        className={`input-field ${error ? 'border-danger/50 focus:border-danger' : ''}`}
        {...props}
      />
      {error && <span className="text-[11px] text-danger ml-4 mt-2">{error}</span>}
    </div>
  );
};

export default Input;
