// http アッパーケース
const http = require('http');
const map = require('through2-map');
const port = process.argv[2];

const server = http.createServer((req, res) => {
    if (req.method !== 'POST') {
        return res.end('Please send a POST method');
    }
    req.pipe(map(chunk => {
        return chunk.toString().toUpperCase();
    })).pipe(res);
});
server.listen(port);


/* 回答例
var http = require('http')
var map = require('through2-map')

var server = http.createServer(function (req, res) {
    if (req.method !== 'POST') {
    return res.end('send me a POST\n')
    }

    req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
    })).pipe(res)
})

server.listen(Number(process.argv[2]))
*/
