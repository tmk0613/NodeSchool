// TCPタイムサーバ
const net = require('net');
const strftime = require('strftime');
const port = process.argv[2];

const server = net.createServer(socket => {
    const date = (strftime('%F %R', new Date()));
    socket.write(date);
    socket.end('\n');
});
server.listen(port);



/* 回答例
var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
    for (var i = 0; i < 3; i++) {
    console.log(results[i])
    }
}

function httpGet (index) {
    http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
        if (err) {
        return console.error(err)
        }

        results[index] = data.toString()
        count++

        if (count === 3) {
        printResults()
        }
    }))
    })
}

for (var i = 0; i < 3; i++) {
    httpGet(i)
}
*/