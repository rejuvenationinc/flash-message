const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '/dist/',
    // library: "flash-message",
    libraryTarget: "umd"
  },
   module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
         test: /\.vue$/,
         loader: 'vue-loader'
       },
       {
         test: /\.css$/,
         use: [
           'vue-style-loader',
           {
             loader: 'css-loader',
             options: {
               // enable CSS Modules
               modules: true,
               // customize generated class names
              localIdentName: '[local]_[hash:base64:8]'
            }
          }
        ]
      }
      ]
   },
   resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      },
      extensions: ['*', '.js', '.vue', '.json']
    },
}
