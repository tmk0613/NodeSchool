// httpファイルサーバ
const http = require('http');
const fs = require('fs');
const port = process.argv[2];
const textPath = process.argv[3];

const server = http.createServer((req, res) => {
    const src = fs.createReadStream(textPath, 'utf-8');
    src.pipe(res);
});
server.listen(port);


/* 回答例
var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' })

    fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]))
*/
