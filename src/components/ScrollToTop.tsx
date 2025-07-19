import { useEffect } from 'react';

export const ScrollToTop = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // This component doesn't render anything
  return null;
};

// Scroll to top button component
export const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling animation
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-[#C3A572] hover:bg-[#B4965E] text-white p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#C3A572] focus:ring-opacity-50 z-50"
      aria-label="Scroll to top"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-6 w-6" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M5 10l7-7m0 0l7 7m-7-7v18" 
        />
      </svg>
    </button>
  );
};
