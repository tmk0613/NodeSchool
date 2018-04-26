const express = require('express');
const portNumber = process.argv[2];
const app = express();
app.get('/home', (req, res) => {
    res.end('Hello World!');
});
app.listen(portNumber);