import React from 'react';
import { Check } from 'lucide-react';

interface FormCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  description?: string;
  // New props for manual control
  value?: boolean;
  onValueChange?: (checked: boolean) => void;
}

export const FormCheckbox = React.forwardRef<HTMLInputElement, FormCheckboxProps>(({
  label,
  description,
  value,
  onValueChange,
  ...props
}, ref) => {
  // Determine checked state - prioritize value prop, then fall back to props.checked
  const isChecked = value !== undefined ? value : props.checked || false;

  // Handle change events for react-hook-form compatibility
  const handleInternalChange = (newChecked: boolean) => {
    // Call react-hook-form's onChange with synthetic event
    if (props.onChange) {
      const syntheticEvent = {
        target: {
          name: props.name || '',
          checked: newChecked,
          value: newChecked.toString()
        }
      } as React.ChangeEvent<HTMLInputElement>;
      props.onChange(syntheticEvent);
    }
    
    // Call manual control onChange
    if (onValueChange) {
      onValueChange(newChecked);
    }
  };

  return (
    <div className="flex items-start space-x-3">
      <input
        ref={ref}
        type="checkbox"
        checked={isChecked}
        onChange={(e) => handleInternalChange(e.target.checked)}
        {...props}
        className="sr-only"
      />
      <button
        type="button"
        onClick={() => handleInternalChange(!isChecked)}
        className={`flex-shrink-0 w-5 h-5 rounded border-2 transition-all duration-300 flex items-center justify-center ${
          isChecked
            ? 'bg-[#C3A572] border-[#C3A572] text-white'
            : 'bg-white/60 border-white/30 hover:border-[#C3A572]/50'
        }`}
      >
        {isChecked && <Check className="w-3 h-3" />}
      </button>
      <div className="flex-1">
        <label className="text-sm font-medium text-[#4B3A2A] cursor-pointer">
          {label}
        </label>
        {description && (
          <p className="text-xs text-[#1A1A1A]/60 mt-1">{description}</p>
        )}
      </div>
    </div>
  );
});

FormCheckbox.displayName = 'FormCheckbox';