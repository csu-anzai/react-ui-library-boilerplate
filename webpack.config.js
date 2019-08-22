const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const pkg = require('./package.json');

module.exports = env => {

  const libraryName = pkg.name;

  return {
    mode: env.production ? 'production' : 'development',
    entry: [
      './src/index.js', 
      './src/styles/styles.scss'
    ],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: env.production ? `${libraryName}.min.js` : `${libraryName}.js`,
      library: libraryName,
      libraryTarget: 'umd'
    },
    plugins: [
      new CleanWebpackPlugin(),
      new CopyPlugin([
        { from: './src/assets', to: 'assets' },
        { from: './src/styles', to: 'styles' },
      ])
    ],
    externals: {
      react: 'react'
    },
    devtool: env.development ? 'inline-source-map': false,
    module: {
      rules: [
        {
          test: /(\.jsx|\.js)$/,
          exclude: /(node_modules|bower_components)/,
          use: [
            'babel-loader',
          ]
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: env.production ? 'styles/[name].min.css' : 'styles/[name].css'
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: env.development ? 'inline' : false
              }
            },
            'sass-loader'
          ]
        }
      ]
    }
  };
};