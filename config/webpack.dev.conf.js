const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');

const baseWebpackConfig = require('./webpack.base.conf');

const resolve = pth => path.resolve(__dirname, '..', pth);

module.exports = merge(baseWebpackConfig, {
	entry: [
		'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
		resolve('build/dev-client')
	],
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	],
	devtool: '#eval-source-map'
});
