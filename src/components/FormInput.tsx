import React from 'react';

export interface FormInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label: string;
  type?: 'text' | 'email' | 'tel' | 'number' | 'password' | 'search' | 'url';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement> | string) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  name?: string;
  id?: string;
}

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  error,
  className,
  inputClassName,
  labelClassName,
  errorClassName,
  name,
  id,
  ...props
}, ref) => {
  return (
    <div className={`space-y-3 font-inter ${className}`}>
      <label className={`block text-sm font-semibold text-accessible-text-primary tracking-tight leading-relaxed ${labelClassName}`}>
        {label} {required && <span className="text-[#C3A572]">*</span>}
      </label>
      <input
        ref={ref}
        id={id}
        type={type}
        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#4B3A2A] focus:border-transparent transition-colors ${inputClassName} ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
        placeholder={placeholder}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (onChange) {
            // Support both direct value setting and React Hook Form's event handling
            const value = e?.target?.value ?? e;
            if (typeof value === 'string') {
              onChange(value);
            } else {
              onChange(e);
            }
          }
        }}
        onBlur={props.onBlur}
        required={required}
        name={name}
        {...props}
      />
      {error && (
        <p className={`text-sm text-red-700 font-medium leading-relaxed ${errorClassName}`} role="alert" aria-live="polite">{error}</p>
      )}
    </div>
  );
});

FormInput.displayName = 'FormInput';