import React from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: 'text' | 'email' | 'tel';
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
  error?: string;
}

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  error,
  ...props
}, ref) => {
  return (
    <div className="space-y-3 font-inter">
      <label className="block text-sm font-semibold text-accessible-text-primary tracking-tight leading-relaxed">
        {label} {required && <span className="text-[#C3A572]">*</span>}
      </label>
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        required={required}
        {...props}
        className={`w-full px-4 py-4 bg-white/60 backdrop-blur-md border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C3A572] focus:ring-offset-2 focus:border-[#C3A572] hover:bg-white/80 font-medium text-accessible-text-primary leading-relaxed ${
          error ? 'border-red-300 bg-red-50/60' : 'border-white/30'
        }`}
      />
      {error && (
        <p className="text-sm text-red-700 font-medium leading-relaxed" role="alert" aria-live="polite">{error}</p>
      )}
    </div>
  );
});

FormInput.displayName = 'FormInput';