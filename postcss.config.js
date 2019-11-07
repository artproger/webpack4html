module.exports = ({ options }) => ({
  plugins: {
    'autoprefixer': {},
    'css-mqpacker': {},
    'cssnano': options.dev ? false : {
      preset: ['default', {
        discardComments: { removeAll: true }
      }]
    }
  }
});