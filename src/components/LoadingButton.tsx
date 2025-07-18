import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingButtonProps {
  children: React.ReactNode;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
}

export const LoadingButton: React.FC<LoadingButtonProps> = ({
  children,
  loading = false,
  onClick,
  type = 'button',
  disabled = false,
  className = ''
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`w-full bg-[#4B3A2A] text-white px-8 py-4 rounded-xl font-semibold font-inter tracking-tight transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-[#3A2A1A] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3 border border-[#4B3A2A] shadow-xl focus:outline-none focus:ring-2 focus:ring-[#C3A572]/50 ${className}`}
    >
      {loading && <Loader2 className="w-5 h-5 animate-spin" />}
      {children}
    </button>
  );
};