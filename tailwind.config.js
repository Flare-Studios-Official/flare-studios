/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#080808',
        surface: {
          DEFAULT: '#111111',
          light: '#181818',
          card: 'rgba(20, 20, 20, 0.7)',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        offwhite: '#F5F3EF',
        flare: {
          orange: '#FF5722',
          amber: '#FF9B45',
          glow: 'rgba(255, 87, 34, 0.35)',
          muted: 'rgba(255, 87, 34, 0.15)',
        },
        glass: {
          surface: 'rgba(255, 255, 255, 0.03)',
          border: 'rgba(255, 255, 255, 0.12)',
          highlight: 'rgba(255, 255, 255, 0.25)',
          hover: 'rgba(255, 255, 255, 0.06)',
        }
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      backgroundImage: {
        'flare-gradient': 'linear-gradient(135deg, #FF5722 0%, #FF9B45 100%)',
        'flare-radial': 'radial-gradient(circle at 50% 50%, rgba(255, 87, 34, 0.25) 0%, rgba(8, 8, 8, 0) 70%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%)',
      },
      boxShadow: {
        'flare-glow': '0 0 35px -5px rgba(255, 87, 34, 0.45)',
        'flare-sm': '0 0 15px -3px rgba(255, 87, 34, 0.3)',
        'glass-edge': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.15), 0 20px 40px -15px rgba(0, 0, 0, 0.7)',
        'liquid-glow': '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 0 0 1px rgba(255, 255, 255, 0.1)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        liquidSheen: {
          '0%': { transform: 'translateX(-100%) skewX(-20deg)' },
          '100%': { transform: 'translateX(200%) skewX(-20deg)' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'liquid-sheen': 'liquidSheen 8s infinite',
      }
    },
  },
  plugins: [],
}
