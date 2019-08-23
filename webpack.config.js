const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const pkg = require('./package.json');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => {

  const libraryName = pkg.name;

  return {
    mode: env.production ? 'production' : 'development',
    entry: [
      './src/index.js', 
      './src/styles/styles.scss',
      './src/styles/test.scss'
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
      ]),
      new MiniCssExtractPlugin({
        filename: env.production ? "styles/[name].min.css" : "styles/[name].css",
        chunkFilename: env.production ? "styles/[id].min.css" : "styles/[id].css"
      })
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
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../',
              }
            },
            'css-loader',
            'postcss-loader',
            {
              loader: 'resolve-url-loader',
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                sourceMapContents: false
              }
            }
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          exclude: /(node_modules|bower_components)/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[folder]/[name].[ext]'
              }
            }
          ]
        }
      ]
    }
  };
};