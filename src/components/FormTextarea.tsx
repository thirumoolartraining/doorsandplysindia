import React from 'react';

export interface FormTextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement> | string) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  error?: string;
  className?: string;
  rows?: number;
  name?: string;
  id?: string;
  inputClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
}

export const FormTextarea = React.forwardRef<HTMLTextAreaElement, FormTextareaProps>(({
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  required = false,
  error,
  className = '',
  rows = 4,
  inputClassName = '',
  labelClassName = '',
  errorClassName = '',
  id,
  name,
  ...props
}, ref) => {
  return (
    <div className={`space-y-3 font-inter ${className}`}>
      <label className={`block text-sm font-semibold text-accessible-text-primary tracking-tight leading-relaxed ${labelClassName}`}>
        {label} {required && <span className="text-[#C3A572]">*</span>}
      </label>
      <div className="relative">
        <textarea
          ref={ref}
          id={id}
          name={name}
          rows={rows}
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#4B3A2A] focus:border-transparent transition-colors ${
            error ? 'border-red-500' : 'border-gray-300'
          } ${inputClassName}`}
          placeholder={placeholder}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
          onBlur={onBlur}
          required={required}
          {...props}
        />
      </div>
      {error && (
        <p className={`text-sm text-red-700 font-medium leading-relaxed ${errorClassName}`} role="alert" aria-live="polite">
          {error}
        </p>
      )}
    </div>
  );
});

FormTextarea.displayName = 'FormTextarea';