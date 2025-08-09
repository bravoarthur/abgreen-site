import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'garden-green': '#2F855A', // Verde para tema de jardinagem
        'earth-brown': '#8B4513',  // Marrom terroso
        'light-garden': '#d1e0ca',
        'light-card': '#e6efe3',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Ensure Inter is the default sans-serif font
      },
    },
  },
  plugins: [],
}
export default config
