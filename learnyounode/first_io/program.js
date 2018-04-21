// 改行文字の数(\n)を求めよう
const fs = require('fs');

const filePath = process.argv[2];
const buf = fs.readFileSync(filePath);
const str = buf.toString();
const count = str.split('\n').length - 1;

console.log(count);


/* 回答例
var fs = require('fs')

var contents = fs.readFileSync(process.argv[2])
var lines = contents.toString().split('\n').length - 1
console.log(lines)

// 注：'readFileSync' の二つ目の引数に 'utf8' を渡すと、
// '.toString' を使わずに文字列を受け取ることが出来ます！
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
*/