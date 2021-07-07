const [, themeName] = __dirname.match(/\/wp-content\/themes\/([^/]+)\/webpack\/loaders$/)
module.exports = {
  test: /\.(png|svg|jpg|gif)$/,
  use: [
    {
      loader: 'url-loader',
      options: {
        name: 'img/[name].[ext]',
        publicPath: `/wp-content/themes/${themeName}/dist`
      }
    }
  ]
}