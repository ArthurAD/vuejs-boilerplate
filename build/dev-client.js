require('webpack-hot-middleware/client').subscribe((event) => {
	if (event.action === 'reload') {
		window.location.reload();
	}
});
