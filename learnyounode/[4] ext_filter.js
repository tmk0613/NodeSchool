// 拡張子によってフィルタしたファイルリストを出力しよう
const fs = require('fs');
const path = require('path');

const filePath = process.argv[2];
const ext = '.' + process.argv[3];
fs.readdir(filePath, (err, files) => {
    if (err) return console.error(err); // 忘れてた...
    for (let i = 0; i < files.length; i++) {
        if (path.extname(files[i]) === ext) {
            console.log(files[i]);
        }
    }
});


/* 回答例
var fs = require('fs')
var path = require('path')

var folder = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
    if (err) return console.error(err)
    files.forEach(function (file) {
    if (path.extname(file) === ext) {
        console.log(file)
    }
    })
})
*/