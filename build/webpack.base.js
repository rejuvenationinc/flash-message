var path = require('path')
var webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'flash-message.js',
    path: path.resolve(__dirname, '../dist'),
    libraryTarget: 'umd',
    library:'flash-message',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
       test: /\.css$/i,
       use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  externals: {
    vue: 'vue'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
  ]
}
