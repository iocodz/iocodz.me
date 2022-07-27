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
        'primary': '#202020'
      }
    },
  },
  variants: {},
  plugins: [],
}