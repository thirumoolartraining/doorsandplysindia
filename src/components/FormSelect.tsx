import React from 'react';
import { ChevronDown } from 'lucide-react';

interface FormSelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  required?: boolean;
  error?: string;
}

export const FormSelect: React.FC<FormSelectProps> = ({
  label,
  value,
  onChange,
  options,
  required = false,
  error
}) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-[#4B3A2A]">
        {label} {required && <span className="text-[#C3A572]">*</span>}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className={`w-full px-4 py-3 bg-white/60 backdrop-blur-md border rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C3A572]/50 focus:border-[#C3A572] hover:bg-white/80 appearance-none cursor-pointer ${
            error ? 'border-red-300 bg-red-50/60' : 'border-white/30'
          }`}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#1A1A1A]/60 pointer-events-none" />
      </div>
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};