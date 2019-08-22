const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: ['./src/index.js'],
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
		new MiniCssExtractPlugin({
			filename: 'styles/[name].min.css',
		})
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
					/*
					{
						loader: 'file-loader',
						options: {
							name: 'styles/[name].min.css',
						}
					},
					*/
					{
						loader: MiniCssExtractPlugin.loader
					},
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			}
		]
	}
}