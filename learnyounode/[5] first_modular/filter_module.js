// モジュラーにしましょう

// 関数をモジュール化
const fs = require('fs');
const path = require('path');

const filterFile = (dir, ext, callback) => {
    fs.readdir(dir, (err, files) => {
        if (err) return callback(err);

        files = files.filter(file => {
            return path.extname(file) === '.' + ext;
        })

        callback(null, files);
    });
};
module.exports = filterFile;


/* 回答例
var fs = require('fs')
var path = require('path')

module.exports = function (dir, filterStr, callback) {
    fs.readdir(dir, function (err, list) {
    if (err) {
        return callback(err)
    }

    list = list.filter(function (file) {
        return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
    })
}
*/