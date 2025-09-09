/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F7F3EA',
        text: '#0f172a',
        accent: '#1F3B4D',
        accentGreen: '#2F6D62'
      },
      fontFamily: {
        serif: ['Merriweather', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      maxWidth: {
        content: '72rem'
      }
    }
  },
  plugins: [],
}
