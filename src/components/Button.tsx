import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'default' | 'ghost' | 'large' | 'settings' | 'share';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  'aria-label'?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'default', 
  onClick, 
  className = '',
  type = 'button',
  disabled = false,
  'aria-label': ariaLabel,
  ...props
}) => {
  const baseClasses = "inline-flex items-center justify-center gap-2 transition-all duration-300 font-semibold font-inter tracking-tight hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#C3A572] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 leading-relaxed";
  
  const variants = {
    default: "bg-[#4B3A2A] text-white px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl hover:bg-[#3A2A1A] border border-[#4B3A2A] min-h-[44px]",
    ghost: "border-2 border-[#4B3A2A] text-[#4B3A2A] px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md hover:bg-[#4B3A2A] hover:text-white shadow-lg hover:shadow-xl min-h-[44px]",
    large: "bg-[#C3A572] text-white px-10 py-4 rounded-xl text-lg shadow-xl hover:shadow-2xl hover:bg-[#B08A4A] border border-[#C3A572]",
    settings: "p-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 shadow-lg hover:shadow-xl min-h-[44px] min-w-[44px]",
    share: "p-3 rounded-xl bg-[#C3A572]/20 backdrop-blur-md border border-[#C3A572]/30 hover:bg-[#C3A572]/30 shadow-lg hover:shadow-xl min-h-[44px] min-w-[44px]"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      disabled={disabled}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
};