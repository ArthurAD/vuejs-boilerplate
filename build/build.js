const webpack = require('webpack');
const webpackConfig = require('./../config/webpack.prod.conf');

/* eslint-disable no-console */
webpack(webpackConfig, (err, stats) => {
	if (err) throw err;

	if (stats.hasErrors()) {
		console.log(stats.toString({ colors: true }));
	} else if (stats.hasWarnings()) {
		console.log('Some warnings:\n', stats.toJson().warnings, '\n');
	} else {
		console.log(`client scripts build end [${new Date().toLocaleString()}]`);
	}
});
