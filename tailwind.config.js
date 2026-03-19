/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0804', // Abyss
        foreground: '#987654', // Old oak
        'abyss': '#0a0804',
        'old-oak': '#987654',
        'ember': '#df6c4f',
        'cave-wall': '#3a2a18',
        'warm-dark': '#0a0804',
        border: 'rgba(58, 42, 24, 0.4)',
        'border-active': '#3a2a18',
        'text-light': '#b59a7a',
        'text-muted': '#6b5138',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        label: ['"IBM Plex Mono"', 'Consolas', 'monospace'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"PT Mono"', 'monospace'],
      },
      animation: {
        'fog-drift': 'fog-drift 25s ease-in-out infinite',
        'grain': 'grain 0.5s steps(1) infinite',
        'shake': 'shake 0.4s ease',
        'glitch': 'glitch 5s infinite',
        'pulse-glow-red': 'pulse-glow-red 3s ease-in-out infinite',
        'pulse-glow-blue': 'pulse-glow-blue 3s ease-in-out infinite',
        'bulb-flicker': 'bulb-flicker 9s infinite',
      },
      keyframes: {
        'fog-drift': {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(2%, -1%) scale(1.015)' },
          '66%': { transform: 'translate(-1%, 2%) scale(0.985)' },
          '100%': { transform: 'translate(0, 0) scale(1)' },
        },
        'grain': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-2%, -3%)' },
          '20%': { transform: 'translate(3%, 1%)' },
          '30%': { transform: 'translate(-1%, 4%)' },
          '40%': { transform: 'translate(4%, -2%)' },
          '50%': { transform: 'translate(-3%, 3%)' },
          '60%': { transform: 'translate(2%, -4%)' },
          '70%': { transform: 'translate(-4%, 1%)' },
          '80%': { transform: 'translate(1%, 3%)' },
          '90%': { transform: 'translate(3%, -1%)' },
        },
        'shake': {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-7px)' },
          '40%': { transform: 'translateX(7px)' },
          '60%': { transform: 'translateX(-4px)' },
          '80%': { transform: 'translateX(4px)' },
        },
        'pulse-glow-red': {
          '0%, 100%': { boxShadow: '0 0 8px rgba(180, 45, 45, 0.4), 0 0 24px rgba(180, 45, 45, 0.1)' },
          '50%': { boxShadow: '0 0 20px rgba(220, 45, 45, 0.7), 0 0 50px rgba(220, 45, 45, 0.25)' },
        },
        'pulse-glow-blue': {
          '0%, 100%': { boxShadow: '0 0 8px rgba(74, 127, 181, 0.3), 0 0 20px rgba(74, 127, 181, 0.1)' },
          '50%': { boxShadow: '0 0 18px rgba(74, 127, 181, 0.6), 0 0 40px rgba(74, 127, 181, 0.2)' },
        },
        'glitch': {
          '0%, 93%, 100%': { transform: 'translateX(0)', clipPath: 'none' },
          '94%': { transform: 'translateX(-3px)', clipPath: 'inset(10% 0 80% 0)' },
          '96%': { transform: 'translateX(3px)', clipPath: 'inset(60% 0 20% 0)' },
          '98%': { transform: 'translateX(-2px)', clipPath: 'inset(30% 0 50% 0)' },
          '99%': { transform: 'translateX(0)', clipPath: 'none' },
        },
        'bulb-flicker': {
          '0%, 18%, 20%, 22%, 24%, 53%, 55%, 96%, 100%': { opacity: '1', textShadow: '0 0 10px rgba(200, 160, 96, 0.8), 0 0 24px rgba(200, 160, 96, 0.4), 0 0 48px rgba(200, 160, 96, 0.15)' },
          '19%, 23%, 54%, 97%': { opacity: '0.65', textShadow: '0 0 4px rgba(200, 160, 96, 0.3)' },
        }
      }
    },
  },
  plugins: [],
}
