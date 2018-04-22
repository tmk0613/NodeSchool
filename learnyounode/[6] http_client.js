// HTTPクライアント
const http = require('http');
const url = process.argv[2];

http.get(url, res => {
    res.setEncoding('utf-8');
    res.on('data', data => {
        console.log(data);
    });
});


/* 回答例
var http = require('http')

http.get(process.argv[2], function (response) {
    response.setEncoding('utf8')
    response.on('data', console.log)
    response.on('error', console.error)
}).on('error', console.error);
*/