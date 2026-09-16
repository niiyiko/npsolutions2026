/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: {
          900: '#0F0F0F',
          800: '#121212',
          700: '#1A1A1A',
          600: '#212121',
          500: '#2B2B2B',
          400: '#3B3B3B',
          300: '#4B4B4B',
          200: '#616161',
          100: '#757575',
        },
        secondary: {
          900: '#CC5619',
          800: '#E65C1C',
          700: '#FF6B20',
          600: '#FF7A33',
          500: '#FF8C40',
          400: '#FF9E4D',
          300: '#FFB066',
          200: '#FFC280',
          100: '#FFD499',
        },
        accent: {
          900: '#CC5619',
          800: '#E65C1C',
          700: '#FF6B20',
          600: '#FF7A33',
          500: '#FF8C40',
          400: '#FF9E4D',
          300: '#FFB066',
          200: '#FFC280',
          100: '#FFD499',
        },
        success: {
          500: '#10b981',
          400: '#34d399',
        },
        warning: {
          500: '#f59e0b',
          400: '#fbbf24',
        },
        error: {
          500: '#ef4444',
          400: '#f87171',
        },
        dark: {
          900: '#080808',
          800: '#0f0f0f',
          700: '#1a1a1a',
          600: '#222222',
          500: '#2d2d2d',
          400: '#3d3d3d',
          300: '#535353',
          200: '#7a7a7a',
          100: '#a0a0a0',
        },
        light: {
          900: '#f8f9fa',
          800: '#e9ecef',
          700: '#dee2e6',
          600: '#ced4da',
          500: '#adb5bd',
          400: '#6c757d',
          300: '#495057',
          200: '#343a40',
          100: '#212529',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        trajan: ['Trajan Pro', 'serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'gradient': 'gradient 15s ease infinite',
        'marquee': 'marquee var(--duration) linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(255, 107, 32, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(255, 107, 32, 0.8), 0 0 30px rgba(255, 140, 64, 0.6)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% - var(--gap)))' }
        }
      },
      maxWidth: {
        container: "1280px",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23FF6B20\' fill-opacity=\'0.05\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
      },
      boxShadow: {
        'glow-sm': '0 0 5px rgba(255, 107, 32, 0.5)',
        'glow-md': '0 0 12px rgba(255, 107, 32, 0.6), 0 0 20px rgba(255, 140, 64, 0.4)',
        'glow-lg': '0 0 20px rgba(255, 107, 32, 0.8), 0 0 30px rgba(255, 140, 64, 0.6)',
        'neon': '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #FF6B20, 0 0 20px #FF6B20, 0 0 25px #FF6B20',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};