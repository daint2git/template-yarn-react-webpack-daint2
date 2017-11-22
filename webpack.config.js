let path = require('path');
const DIR = path.resolve(__dirname, 'src/public');

module.exports = {
    entry: [
      './src/index.js'
    ],
    module: {
      rules: [{
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }          
      ]
    },
    output: {
      path: DIR + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
          TestCss: path.resolve(__dirname, 'dist/css/')
        }
    },
    devServer: {
      contentBase: './dist'
    }
  };