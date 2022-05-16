'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
	res.send('Hello Monday 16.05.2022 DevOps Course! Tom, Max, Dominik v5');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
