const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const resolve = pth => path.resolve(__dirname, '..', pth);

module.exports = {
	context: resolve('client/dev'),
	entry: [
		'./main.js'
	],
	output: {
		path: resolve('client/public/dist'),
		publicPath: '/dist/',
		filename: 'build.js'
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						css: ExtractTextPlugin.extract({
							use: ['css-loader'],
							fallback: 'vue-style-loader'
						})
					}
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('style.css')
	],
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			vue$: 'vue/dist/vue.esm.js',
			'@': resolve('client/dev')
		}
	},
	performance: {
		hints: false
	},
	stats: 'verbose'
};
