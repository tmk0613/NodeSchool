// HTTPクライアント
// dataイベントの結果をまとめてendイベントで書き出しパターン
const http = require('http');
const url = process.argv[2];

http.get(url, res => {
    // res.setEncoding('utf-8');
    let results = '';
    res.on('data', data => {
        results += data;
    });
    res.on('end', () => {
        console.log(results.length);
        console.log(results);
    });
});


/* 回答例
var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
    if (err) {
        return console.error(err)
    }
    data = data.toString()
    console.log(data.length)
    console.log(data)
    }))
})
*/