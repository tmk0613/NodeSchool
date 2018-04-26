const express = require('express');
const portNumber = process.argv[2];
const app = express();

app.use(express.static('public'));
app.listen(portNumber);


/* Reference solution

var path = require('path')
var express = require('express')
var app = express()

app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));

app.listen(process.argv[2])

*/