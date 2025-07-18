import React from 'react';
import { AlertTriangle, Info } from 'lucide-react';

interface AlertProps {
  children: React.ReactNode;
  variant?: 'info' | 'warning';
  className?: string;
}

export const Alert: React.FC<AlertProps> = ({ 
  children, 
  variant = 'info', 
  className = '' 
}) => {
  const variants = {
    info: {
      icon: Info,
      classes: "bg-blue-50/80 backdrop-blur-md border-2 border-blue-200/50 text-blue-800 shadow-lg"
    },
    warning: {
      icon: AlertTriangle,
      classes: "bg-[#C3A572]/10 backdrop-blur-md border-2 border-[#C3A572]/30 text-[#4B3A2A] shadow-lg"
    }
  };

  const { icon: Icon, classes } = variants[variant];

  return (
    <div className={`rounded-2xl p-6 flex items-start gap-4 font-inter transition-all duration-300 ${classes} ${className}`}>
      <Icon className="w-6 h-6 flex-shrink-0 mt-0.5" />
      <div className="flex-1">{children}</div>
    </div>
  );
};