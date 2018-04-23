// http json server
// My code should be functionalized.
const http = require('http');
const url = require('url');
const port = process.argv[2];

const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.writeHead(404);
        return res.end('Please send a GET method');
    }
    const reqUrl = url.parse(req.url, true);
    const pathname = reqUrl.pathname;
    const date = new Date(reqUrl.query.iso);
    const json = {};

    if (pathname === '/api/parsetime') {
        json.hour = date.getHours();
        json.minute = date.getMinutes();
        json.second = date.getSeconds();
    }
    else if (pathname === '/api/unixtime') {
        json.unixtime = date.getTime();
    }
    else {
        res.writeHead(404);
        return res.end('Invalid pathname');
    }

    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.write(JSON.stringify(json));
    res.end();
});
server.listen(port);


/* 回答例
var http = require('http')
var url = require('url')

function parsetime (time) {
    return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
    }
}

function unixtime (time) {
    return { unixtime: time.getTime() }
}

var server = http.createServer(function (req, res) {
    var parsedUrl = url.parse(req.url, true)
    var time = new Date(parsedUrl.query.iso)
    var result

    if (/^\/api\/parsetime/.test(req.url)) {
    result = parsetime(time)
    } else if (/^\/api\/unixtime/.test(req.url)) {
    result = unixtime(time)
    }

    if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
    } else {
    res.writeHead(404)
    res.end()
    }
})
server.listen(Number(process.argv[2]))
*/
