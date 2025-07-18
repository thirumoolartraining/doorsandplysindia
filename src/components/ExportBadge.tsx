import React from 'react';
import { Globe, Award, Truck } from 'lucide-react';

interface ExportBadgeProps {
  type: 'available' | 'certified' | 'shipping';
  className?: string;
}

export const ExportBadge: React.FC<ExportBadgeProps> = ({ type, className = '' }) => {
  const badges = {
    available: {
      icon: Globe,
      text: 'Export Ready',
      bgColor: 'bg-[#C3A572]/20',
      textColor: 'text-[#4B3A2A]',
      borderColor: 'border-[#C3A572]/30'
    },
    certified: {
      icon: Award,
      text: 'ISO Certified',
      bgColor: 'bg-green-100/80',
      textColor: 'text-green-800',
      borderColor: 'border-green-200/50'
    },
    shipping: {
      icon: Truck,
      text: 'Global Shipping',
      bgColor: 'bg-blue-100/80',
      textColor: 'text-blue-800',
      borderColor: 'border-blue-200/50'
    }
  };

  const badge = badges[type];
  const Icon = badge.icon;

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border ${badge.bgColor} ${badge.textColor} ${badge.borderColor} ${className}`}>
      <Icon className="w-3 h-3" />
      {badge.text}
    </div>
  );
};