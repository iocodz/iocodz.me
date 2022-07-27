module.exports = {
  purge: {
    content: [
      './src/**/*.vue',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.html',
      './src/**/*.pug',
      './src/**/*.md'
    ]
  },
  theme: {
    extend: {
      colors: {
        'primary': '#0e2233',
        'secondary': 'rgb(67, 52, 34)'
      }
    },
  },
  variants: {},
  plugins: [],
}