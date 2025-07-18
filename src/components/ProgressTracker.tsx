import React from 'react';

interface ProgressTrackerProps {
  currentStep: number;
  steps: string[];
}

export const ProgressTracker: React.FC<ProgressTrackerProps> = ({ currentStep, steps }) => {
  return (
    <div className="bg-white/60 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-6 mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                index < currentStep 
                  ? 'bg-[#C3A572] text-white' 
                  : index === currentStep 
                    ? 'bg-[#4B3A2A] text-white' 
                    : 'bg-white/60 text-[#1A1A1A]/60 border border-white/30'
              }`}>
                {index < currentStep ? '✓' : index + 1}
              </div>
              <span className={`ml-3 text-sm font-medium hidden sm:inline ${
                index <= currentStep ? 'text-[#4B3A2A]' : 'text-[#1A1A1A]/60'
              }`}>
                {step}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className={`flex-1 h-0.5 mx-4 transition-all duration-300 ${
                index < currentStep ? 'bg-[#C3A572]' : 'bg-white/30'
              }`} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};