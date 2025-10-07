/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'rgba(255,255,255,0.6)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 700ms ease-out both',
        slideUp: 'slideUp 700ms ease-out both',
        float: 'float 4s ease-in-out infinite',
        shimmer: 'shimmer 3s ease-in-out infinite',
        typing: 'typing 2.8s steps(28, end) both',
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
}