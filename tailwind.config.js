/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'var(--color-border)',
        input: 'var(--color-input)',
        ring: 'var(--color-ring)',
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        primary: {
          DEFAULT: 'var(--color-primary)',
          foreground: 'var(--color-primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          foreground: 'var(--color-secondary-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)',
          foreground: 'var(--color-destructive-foreground)',
        },
        muted: {
          DEFAULT: 'var(--color-muted)',
          foreground: 'var(--color-muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          foreground: 'var(--color-accent-foreground)',
        },
        popover: {
          DEFAULT: 'var(--color-popover)',
          foreground: 'var(--color-popover-foreground)',
        },
        card: {
          DEFAULT: 'var(--color-card)',
          foreground: 'var(--color-card-foreground)',
        },
      },
      borderRadius: {
        lg: 'var(--radius-lg)',
        md: 'var(--radius-md)',
        sm: 'var(--radius-sm)',
        xl: 'var(--radius-xl)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        'border-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 10px 2px var(--color-primary)',
            borderColor: 'var(--color-primary)' 
          },
          '50%': { 
            boxShadow: '0 0 20px 5px var(--color-accent)',
            borderColor: 'var(--color-accent)' 
          },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'fade-in': {
          '0%': { opacity: 0, filter: 'blur(12px)' },
          '100%': { opacity: 1, filter: 'blur(0px)' },
        },
        'fade-out': {
          '0%': { opacity: 1, filter: 'blur(0px)' },
          '100%': { opacity: 0, filter: 'blur(12px)' },
        },
        'blur-in': {
          '0%': { filter: 'blur(12px)' },
          '100%': { filter: 'blur(0px)' },
        },
        'blur-out': {
          '0%': { filter: 'blur(0px)' },
          '100%': { filter: 'blur(12px)' },
        }
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'border-glow': 'border-glow 4s ease-in-out infinite',
        'spin-slow': 'spin-slow 8s linear infinite',
        'fade-in': 'fade-in 0.7s cubic-bezier(0.33, 1, 0.68, 1) forwards',
        'fade-out': 'fade-out 0.5s cubic-bezier(0.33, 1, 0.68, 1) forwards',
        'blur-in': 'blur-in 0.6s ease-out forwards',
        'blur-out': 'blur-out 0.6s ease-in forwards',
      },
      backdropFilter: {
        'none': 'none',
        'blur-sm': 'blur(4px)',
        'blur': 'blur(8px)',
        'blur-md': 'blur(12px)',
        'blur-lg': 'blur(16px)',
        'blur-xl': 'blur(24px)',
        'blur-2xl': 'blur(40px)',
        'blur-3xl': 'blur(64px)',
      },
    },
  },
  plugins: [],
} 