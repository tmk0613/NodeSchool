// HTTPクライアント
// Buffer Listパッケージを使うパターン
const http = require('http');
const bl = require('bl');
const url = process.argv[2];

http.get(url, res => {
    res.pipe(bl((err, data) => {
        if (err) return console.error('bl error:', err);

        data = data.toString();
        console.log(data.length);
        console.log(data);
    }));
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