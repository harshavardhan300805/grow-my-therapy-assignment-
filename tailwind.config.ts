import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        sage: {
          50: 'hsl(var(--sage-50))',
          100: 'hsl(var(--sage-100))',
          200: 'hsl(var(--sage-200))',
          300: 'hsl(var(--sage-300))',
          400: 'hsl(var(--sage-400))',
          500: 'hsl(var(--sage-500))',
          600: 'hsl(var(--sage-600))',
          700: 'hsl(var(--sage-700))',
          800: 'hsl(var(--sage-800))',
          900: 'hsl(var(--sage-900))',
        },
        clay: {
          50: 'hsl(var(--clay-50))',
          100: 'hsl(var(--clay-100))',
          200: 'hsl(var(--clay-200))',
          300: 'hsl(var(--clay-300))',
          400: 'hsl(var(--clay-400))',
          500: 'hsl(var(--clay-500))',
          600: 'hsl(var(--clay-600))',
          700: 'hsl(var(--clay-700))',
          800: 'hsl(var(--clay-800))',
          900: 'hsl(var(--clay-900))',
        },
        sand: {
          50: 'hsl(var(--sand-50))',
          100: 'hsl(var(--sand-100))',
          200: 'hsl(var(--sand-200))',
          300: 'hsl(var(--sand-300))',
          400: 'hsl(var(--sand-400))',
          500: 'hsl(var(--sand-500))',
          600: 'hsl(var(--sand-600))',
          700: 'hsl(var(--sand-700))',
          800: 'hsl(var(--sand-800))',
          900: 'hsl(var(--sand-900))',
        },
        chart: {
          '1': '152 23% 38%',
          '2': '18 55% 52%',
          '3': '40 30% 50%',
          '4': '200 30% 45%',
          '5': '350 40% 55%',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'fade-in': 'fade-in 1s ease-out forwards',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
