import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'body': ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Roboto']
      },
      colors: {
        'darkBG': '#222222',
        'titleBG': '#2a2a2a',
        'borderBG': '#444444'
      },
    },
  },
  plugins: [],
} satisfies Config