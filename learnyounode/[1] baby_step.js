const arg = process.argv;
let total = 0;
for (let i=2, len=arg.length; i < len; i++) {
    total += Number(arg[i]);
}
console.log(total);

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