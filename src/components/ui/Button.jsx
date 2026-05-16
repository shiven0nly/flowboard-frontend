import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  loading = false,
  icon: Icon,
  ...props 
}) => {
  const variants = {
    primary: 'btn-primary shadow-sm',
    secondary: 'btn-secondary',
    ghost: 'hover:bg-white/5 text-text-secondary hover:text-text-primary',
    danger: 'bg-danger/10 text-danger hover:bg-danger/20 border border-danger/20',
  };

  const sizes = {
    sm: 'px-12 py-6 text-xs',
    md: 'px-16 py-8 text-sm',
    lg: 'px-24 py-12 text-base',
  };

  return (
    <button 
      className={`btn ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <span className="w-16 h-16 border-2 border-current border-t-transparent rounded-full animate-spin mr-8" />
      ) : Icon && (
        <Icon size={16} className="mr-8" />
      )}
      {children}
    </button>
  );
};

export default Button;
