import type { Config } from 'tailwindcss'

// NOTE: In Tailwind v4, this file must be explicitly loaded via
// @config "../../tailwind.config.ts" in globals.css
// It is NOT auto-detected by v4 (unlike v3).
// Shared colors live here so custom utilities like warm-* and charcoal-* compile.
const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/hooks/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          50: '#F5F5F5',
          100: '#E5E5E5',
          200: '#D4D4D4',
          300: '#A3A3A3',
          400: '#737373',
          500: '#525252',
          600: '#404040',
          700: '#2D2D2D',
          800: '#1A1A1A',
          900: '#0A0A0A',
          DEFAULT: '#1A1A1A',
        },
        warm: {
          50: '#FDFCF9',
          100: '#FBF9F4',
          200: '#F9F5ED',
          300: '#F7F1E6',
          400: '#F5EDDF',
          500: '#F3E9D8',
          DEFAULT: '#FAFAF7',
        },
        teal: {
          500: '#14B8A6',
          600: '#0D9488',
          DEFAULT: '#14B8A6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
