import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const NotFound = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-background text-center px-24">
      <h1 className="text-6xl font-bold text-accent mb-16">404</h1>
      <h2 className="text-2xl font-semibold text-text-primary mb-8">Page Not Found</h2>
      <p className="text-text-secondary mb-32 max-w-400">
        The page you are looking for might have been removed or is temporarily unavailable.
      </p>
      <Link to="/">
        <Button variant="primary">Return Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
