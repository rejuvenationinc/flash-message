const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const TerserJSPlugin = require('terser-webpack-plugin');

const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');


 module.exports = merge(base, {
   mode: 'production',
   devtool: 'source-map',
   optimization: {
     minimizer: [new TerserJSPlugin({
       parallel: true,
       cache: true,
       sourceMap: true,
       terserOptions: {
         parse: {
           // Let terser parse ecma 8 code but always output
           // ES5 compliant code for older browsers
           ecma: 8
         },
     }), new OptimizeCSSAssetsPlugin({}) ],
   }
 });
