import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
  active?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm mb-8">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <ChevronRight className="w-4 h-4 text-[#1A1A1A]/40" />
          )}
          {item.href ? (
            <button
              onClick={item.onClick}
              className="flex items-center gap-1 text-[#1A1A1A]/60 hover:text-[#4B3A2A] transition-colors duration-200"
            >
              {index === 0 && <Home className="w-4 h-4" />}
              {item.label}
            </button>
          ) : (
            <span className={`flex items-center gap-1 ${
              item.active 
                ? 'text-[#4B3A2A] font-medium' 
                : 'text-[#1A1A1A]/60'
            }`}>
              {index === 0 && <Home className="w-4 h-4" />}
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};