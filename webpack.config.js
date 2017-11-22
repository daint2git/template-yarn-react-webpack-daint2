let path = require('path');
const DIR = path.resolve(__dirname, 'src/public');

module.exports = {
    entry: [
      './src/index.js'
    ],
    module: {
        loaders: [{
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }]
    },
    output: {
      path: DIR + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },    
    devServer: {
      contentBase: './dist'
    }
  };