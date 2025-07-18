import React from 'react';
import { Minus, Plus } from 'lucide-react';

interface QuantitySelectorProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  disabled?: boolean;
  className?: string;
}

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  value,
  onChange,
  min = 1,
  max = 1000,
  disabled = false,
  className = ''
}) => {
  const handleDecrease = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleIncrease = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value) || min;
    if (newValue >= min && newValue <= max) {
      onChange(newValue);
    }
  };

  return (
    <div className={`flex items-center bg-white/60 backdrop-blur-md border border-white/30 rounded-xl overflow-hidden ${className}`}>
      <button
        type="button"
        onClick={handleDecrease}
        disabled={disabled || value <= min}
        className="p-3 hover:bg-white/40 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Minus className="w-4 h-4 text-[#4B3A2A]" />
      </button>
      
      <input
        type="number"
        value={value}
        onChange={handleInputChange}
        min={min}
        max={max}
        disabled={disabled}
        className="w-16 text-center bg-transparent border-none outline-none font-semibold text-[#4B3A2A] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
      
      <button
        type="button"
        onClick={handleIncrease}
        disabled={disabled || value >= max}
        className="p-3 hover:bg-white/40 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Plus className="w-4 h-4 text-[#4B3A2A]" />
      </button>
    </div>
  );
};