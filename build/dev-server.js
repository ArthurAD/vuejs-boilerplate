const path = require('path');
const chokidar = require('chokidar');
const webpackDev = require('webpack-dev-middleware');
const webpackHot = require('webpack-hot-middleware');
const opn = require('opn');
const webpackConfig = require('./../config/webpack.dev.conf');
const compiler = require('webpack')(webpackConfig);

module.exports = (app, url) => {
	app.locals.pretty = true;

	const hotMiddleware = webpackHot(compiler, {
		path: '/__webpack_hmr',
		heartbeat: 10 * 1000
	});

	app.use(webpackDev(compiler, {
		noInfo: true,
		publicPath: webpackConfig.output.publicPath,
		stats: { colors: true }
	}));

	app.use(hotMiddleware);

	const watcher = chokidar.watch(path.join(__dirname, '../server'));

	watcher.on('ready', () => {
		watcher.on('all', () => {
			const sep = path.sep;
			const regexp = new RegExp(`\\${sep}server\\${sep}`);
			Object.keys(require.cache).forEach((id) => {
				if (!/node_modules/.test(id) && regexp.test(id)) {
					delete require.cache[id];
				}
			});

			hotMiddleware.publish({ action: 'reload' });
		});
	});

	opn(url);
};
