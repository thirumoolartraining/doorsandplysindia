import React from 'react';

export const ProductSkeleton: React.FC = () => {
  return (
    <div className="bg-white/30 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl overflow-hidden animate-pulse">
      {/* Image Skeleton */}
      <div className="h-72 bg-gradient-to-r from-gray-200/60 via-gray-300/60 to-gray-200/60 bg-[length:200%_100%] animate-shimmer rounded-t-2xl" />
      
      {/* Content Skeleton */}
      <div className="p-6">
        {/* Category */}
        <div className="h-3 bg-gradient-to-r from-gray-200/60 via-gray-300/60 to-gray-200/60 bg-[length:200%_100%] animate-shimmer rounded-full w-24 mb-4" />
        
        {/* Title */}
        <div className="h-6 bg-gradient-to-r from-gray-200/60 via-gray-300/60 to-gray-200/60 bg-[length:200%_100%] animate-shimmer rounded-lg mb-2" />
        <div className="h-6 bg-gradient-to-r from-gray-200/60 via-gray-300/60 to-gray-200/60 bg-[length:200%_100%] animate-shimmer rounded-lg w-3/4 mb-4" />
        
        {/* Description */}
        <div className="h-4 bg-gradient-to-r from-gray-200/60 via-gray-300/60 to-gray-200/60 bg-[length:200%_100%] animate-shimmer rounded-lg mb-2" />
        <div className="h-4 bg-gradient-to-r from-gray-200/60 via-gray-300/60 to-gray-200/60 bg-[length:200%_100%] animate-shimmer rounded-lg w-2/3 mb-6" />
        
        {/* Price */}
        <div className="space-y-2 mb-6">
          <div className="h-7 bg-gradient-to-r from-gray-200/60 via-gray-300/60 to-gray-200/60 bg-[length:200%_100%] animate-shimmer rounded-lg w-24" />
          <div className="h-5 bg-gradient-to-r from-gray-200/60 via-gray-300/60 to-gray-200/60 bg-[length:200%_100%] animate-shimmer rounded-lg w-20" />
        </div>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="h-12 bg-gradient-to-r from-gray-200/60 via-gray-300/60 to-gray-200/60 bg-[length:200%_100%] animate-shimmer rounded-xl flex-1" />
          <div className="h-12 bg-gradient-to-r from-gray-200/60 via-gray-300/60 to-gray-200/60 bg-[length:200%_100%] animate-shimmer rounded-xl flex-1" />
        </div>
      </div>
    </div>
  );
};