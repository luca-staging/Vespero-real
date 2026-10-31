/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        sm: '6px',
        md: '8px',
        lg: '12px',
        xl: '14px',
        '2xl': '18px',
        '3xl': '24px',
      },
      colors: {
        void: {
          950: '#F0F9FF',
          900: '#FFFFFF',
          850: '#E0F2FE',
          800: '#FFFFFF',
          700: '#D3ECFA',
          600: '#BAE6FD',
          500: '#7DD3FC',
          400: '#5B7C99',
        },
        cream: {
          50: '#F8FCFF',
          100: '#0C4A6E',
          200: '#075985',
          300: '#0E668F',
          400: '#5B7C99',
        },
        accent: {
          DEFAULT: '#0284C7',
          light: '#0EA5E9',
          dark: '#0369A1',
          muted: 'rgba(14, 165, 233, 0.14)',
        },
        secondary: {
          DEFAULT: '#0369A1',
          light: '#38BDF8',
          dark: '#0C4A6E',
          muted: 'rgba(3, 105, 161, 0.12)',
        },
        glow: {
          accent: 'rgba(14, 165, 233, 0.28)',
          secondary: 'rgba(56, 189, 248, 0.28)',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'brick-pattern': "url(\"data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h48M0 0v48' fill='none' stroke='%23111318' stroke-opacity='0.05'/%3E%3C/svg%3E\")",
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      boxShadow: {
        'glow': '0 16px 40px -24px rgba(17, 19, 24, 0.35)',
        'glow-sm': '0 8px 24px -16px rgba(17, 19, 24, 0.28)',
        'glow-secondary': '0 8px 24px -16px rgba(17, 19, 24, 0.2)',
        'inner-glow': 'inset 0 0 0 1px rgba(17, 19, 24, 0.06)',
        'card': '0 1px 2px rgba(17, 19, 24, 0.04), 0 12px 32px -16px rgba(17, 19, 24, 0.12)',
      },
    },
  },
  plugins: [],
};
