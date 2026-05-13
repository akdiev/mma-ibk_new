import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#dc3214',
          dark: '#0a0a0a',
          darker: '#070707',
          surface: '#111111',
          card: '#141414',
          border: 'rgba(255,255,255,0.07)',
        },
      },
      fontFamily: {
        bebas: ['var(--font-bebas)', 'Arial Black', 'sans-serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'punch': 'punch 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.4s forwards',
        'impact': 'impact 0.35s ease-out 1.22s forwards',
        'logo-in': 'logoIn 0.5s ease 1.4s forwards',
        'bar-in': 'barIn 0.3s ease 1.5s forwards',
        'bar-fill': 'barFill 0.9s ease 1.55s forwards',
        'fade-up': 'fadeUp 0.6s ease forwards',
        'counter': 'counter 2s ease forwards',
      },
      keyframes: {
        punch: {
          '0%':   { transform: 'translateX(-180px) rotate(-8deg) scale(0.85)' },
          '65%':  { transform: 'translateX(12px) rotate(2deg) scale(1.08)' },
          '75%':  { transform: 'translateX(-6px) rotate(-1deg) scale(1.0)' },
          '100%': { transform: 'translateX(0px) rotate(0deg) scale(1)' },
        },
        impact: {
          '0%':   { transform: 'translate(-50%, -50%) scale(0)', opacity: '1' },
          '60%':  { transform: 'translate(-50%, -50%) scale(1.5)', opacity: '0.9' },
          '100%': { transform: 'translate(-50%, -50%) scale(2.2)', opacity: '0' },
        },
        logoIn: {
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        barIn: {
          'to': { opacity: '1' },
        },
        barFill: {
          'to': { width: '100%' },
        },
        fadeUp: {
          'from': { opacity: '0', transform: 'translateY(24px)' },
          'to':   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
