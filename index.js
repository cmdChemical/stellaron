const path = require('path');
const express = require('express');


const app = express();

app.use('',express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
	return response.sendFile('index.html', { root: '.' });
});

app.get('/status', (request, response) => {
	return response.sendFile('status.html', { root: '.' });
});

app.get('/chemicalcarrd', (request, response) => {
	return response.sendFile('chemicalcarrd.html', { root: '.' });
});

app.get('/chemicalcarrdfr', (request, response) => {
	return response.sendFile('chemicalcarrdfr.html', { root: '.' });
});

const port = '53134';
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));