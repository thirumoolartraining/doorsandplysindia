import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'basic' | 'product' | 'stats' | 'notification';
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  variant = 'basic', 
  className = '',
  hover = true 
}) => {
  const baseClasses = "rounded-2xl transition-all duration-300 font-inter";
  const hoverClasses = hover ? "hover:scale-105 hover:shadow-2xl" : "";
  
  const variants = {
    basic: "bg-white/80 backdrop-blur-md border border-white/20 shadow-xl p-8",
    product: "bg-white/90 backdrop-blur-md border border-white/30 shadow-xl p-6 overflow-hidden",
    stats: "bg-gradient-to-br from-[#4B3A2A]/10 to-[#C3A572]/10 backdrop-blur-md border border-white/20 shadow-xl p-8 text-center",
    notification: "bg-white/70 backdrop-blur-md border border-white/20 shadow-lg p-6"
  };

  return (
    <div className={`${baseClasses} ${variants[variant]} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};