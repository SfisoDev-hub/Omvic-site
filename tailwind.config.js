/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
    },
    extend: {
      colors: {
        // Core industrial palette
        charcoal: {
          DEFAULT: '#17181A',
          50: '#F3F3F3',
          100: '#E2E2E3',
          200: '#B8B9BB',
          300: '#8E8F92',
          400: '#5F6165',
          500: '#3A3C40',
          600: '#292A2D',
          700: '#202124',
          800: '#1A1B1D',
          900: '#141517',
        },
        steel: {
          DEFAULT: '#4B5560',
          light: '#8B96A1',
          dark: '#2E353C',
        },
        sand: {
          DEFAULT: '#F4F2EC',
          50: '#FBFAF7',
          100: '#F4F2EC',
          200: '#E8E4D8',
        },
        gold: {
          DEFAULT: '#C4862E',
          light: '#DBA65A',
          dark: '#9C6A22',
          50: '#FBF3E7',
        },
      },
      fontFamily: {
        display: ['"Big Shoulders Display"', 'Oswald', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 7vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.01em' }],
        'display-lg': ['clamp(2.25rem, 4.5vw, 4rem)', { lineHeight: '1.02', letterSpacing: '-0.005em' }],
        'display-md': ['clamp(1.75rem, 3vw, 2.75rem)', { lineHeight: '1.05' }],
      },
      backgroundImage: {
        'blueprint-grid':
          'linear-gradient(rgba(196,134,46,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(196,134,46,0.08) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
      clipPath: {
        corner: 'polygon(0 0, 100% 0, 100% calc(100% - 28px), calc(100% - 28px) 100%, 0 100%)',
      },
      boxShadow: {
        panel: '0 30px 60px -30px rgba(20, 21, 23, 0.45)',
      },
      transitionTimingFunction: {
        industrial: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
