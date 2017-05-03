const express = require('express');

const app = express.Router();

app.get('*', (req, res) => res.sendFile('index.html', { root: './client/public' }));

module.exports = app;
