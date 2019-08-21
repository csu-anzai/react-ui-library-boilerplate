const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: ['./src/styles/styles.scss'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'react-ui-library-boilerplate.js',
		library: 'react-ui-library-boilerplate',
		libraryTarget: 'umd'
	},
	plugins: [
		new CleanWebpackPlugin(),
		new CopyPlugin([
      { from: './src/assets', to: 'assets' },
      { from: './src/styles', to: 'styles' },
    ]),
	],
	externals: {
    react: 'react'
  },
	module: {
		rules: [
			{
				test: /(\.jsx|\.js)$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							exclude: /(node_modules|bower_components)/
						}
					}
				]
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'styles/[name].min.css',
						}
					},
					{
						loader: 'postcss-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	}
}