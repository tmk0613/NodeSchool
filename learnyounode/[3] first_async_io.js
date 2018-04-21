// 改行文字の数(\n)を求めよう(非同期処理)
const fs = require('fs');

const filePath = process.argv[2];
fs.readFile(filePath, 'utf-8', (err, str) => {
    if (err) { return console.log(err); } // 忘れてた
    console.log(str.split('\n').length - 1);
});


/* 回答例
var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, function (err, contents) {
    if (err) {
    return console.log(err)
    }
    // fs.readFile(file, 'utf8', callback) 使ってもいいです
    var lines = contents.toString().split('\n').length - 1
    console.log(lines)
})
*/