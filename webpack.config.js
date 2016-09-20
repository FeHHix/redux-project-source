var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [ //откула начинать сборку
    'webpack-hot-middleware/client', //добавить поддержку hot-reload
    'babel-polyfill',
    './src/index'
  ],
  output: { //куда генерировать дистрибутив
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(), //добавить поддержку hot-reload
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [ //добавление babel-loader
      {
        loaders: ['babel-loader'],
        include: [
          path.resolve(__dirname, "src") //обработка файлов babel-loader'ом
        ],
        test: /\.js$/,
        plugins: ['transform-runtime']
      }
    ]
  }
}
