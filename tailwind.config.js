/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
    },
    extend: {
      maxWidth: {
        '8xl': '88rem',   // 1408px
        '9xl': '96rem',   // 1536px
        'prose': '65ch',  // For optimal reading width
      },
      fontFamily: {
        'sans': ['Manrope', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'display': ['Sora', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        'wood-brown': '#4B3A2A',
        'warm-gold': '#C3A572',
        'soft-white': '#F5F5F5',
        'near-black': '#1A1A1A',
      },
      backdropBlur: {
        'xs': '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'shimmer': 'shimmer 2s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-inset': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.06)',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.6', letterSpacing: '0.025em' }],
        'sm': ['0.875rem', { lineHeight: '1.6', letterSpacing: '0.025em' }],
        'base': ['1rem', { lineHeight: '1.7', letterSpacing: '0.025em' }],
        'lg': ['1.125rem', { lineHeight: '1.7', letterSpacing: '0.025em' }],
        'xl': ['1.25rem', { lineHeight: '1.6', letterSpacing: '0.025em' }],
        '2xl': ['1.5rem', { lineHeight: '1.5', letterSpacing: '0.025em' }],
        '3xl': ['1.875rem', { lineHeight: '1.4', letterSpacing: '0.025em' }],
        '4xl': ['2.25rem', { lineHeight: '1.3', letterSpacing: '0.025em' }],
        '5xl': ['3rem', { lineHeight: '1.2', letterSpacing: '0.025em' }],
        '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '0.025em' }],
      },
      colors: {
        // Enhanced contrast colors for accessibility
        'accessible-text': {
          'primary': '#1a1a1a',     // WCAG AAA compliant on white
          'secondary': '#4a4a4a',   // WCAG AA compliant on white
          'muted': '#6b7280',       // WCAG AA compliant on white
        },
        'accessible-bg': {
          'light': '#ffffff',
          'subtle': '#f9fafb',
          'muted': '#f3f4f6',
        },
        // High contrast mode colors
        'high-contrast': {
          'text': '#000000',
          'bg': '#ffffff',
          'accent': '#0066cc',
        },
      },
    },
  },
  plugins: [],
};