module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './index.html',
    './projects/**/*.md'
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FE5D26',
        'secondary': '#F2C078',
        'accent': '#FAEDCA',
        'sage': '#C1DBB3'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
