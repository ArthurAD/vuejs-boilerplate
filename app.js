const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.disable('x-powered-by');

const port = 3000;
const url = `http://localhost:${port}/`;

if (process.env.NODE_ENV === 'dev') {
	// eslint-disable-next-line global-require
	require('./build/dev-server')(app, url);
}

app.use(express.static(path.join(__dirname, 'client/public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
	// eslint-disable-next-line global-require
	require('./server/routes')(req, res, next);
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening on ${url}`));
