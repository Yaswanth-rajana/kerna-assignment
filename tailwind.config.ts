import type { Config } from 'tailwindcss'

// NOTE: In Tailwind v4, this file must be explicitly loaded via
// @config "../../tailwind.config.ts" in globals.css
// It is NOT auto-detected by v4 (unlike v3).
// All colors are defined in globals.css via @theme (Tailwind v4 approach).
// Keeping only fontFamily here to avoid Turbopack parse warnings on numeric keys.
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
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config