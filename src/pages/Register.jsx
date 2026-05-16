import React from 'react';
import RegisterForm from '../components/auth/RegisterForm';

const Register = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-background p-24 overflow-hidden relative">
      {/* Dynamic and positive background glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[10%] w-[600px] h-[600px] bg-accent/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[5%] w-[500px] h-[500px] bg-success/10 rounded-full blur-[100px]" />
        <div className="absolute top-[30%] left-[40%] w-[300px] h-[300px] bg-text-primary/5 rounded-full blur-[80px]" />
      </div>

      <div className="w-full max-w-[420px] bg-surface/80 backdrop-blur-2xl border border-border-strong rounded-2xl shadow-skeuo-out p-48 z-10 fade-in relative transform hover:scale-[1.01] transition-transform duration-500">
        <div className="text-center mb-32 flex flex-col items-center">
          <div className="flex items-center justify-center p-12 bg-surface-elevated rounded-2xl border border-border-strong shadow-skeuo-out mb-24 transform hover:rotate-3 transition-transform duration-500">
            <img src="/logo.jpeg" alt="FlowBoard Logo" className="h-20 object-contain rounded-xl drop-shadow-lg" />
          </div>
          <h1 className="text-3xl font-bold text-text-primary tracking-tight mb-8">Create Account</h1>
          <p className="text-sm text-text-secondary">Join FlowBoard and streamline your workflow.</p>
        </div>
        
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
