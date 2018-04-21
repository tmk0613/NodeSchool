// モジュラーにしましょう

// モジュールの読み込み
const filter_module = require('./filter_module.js');
const dir = process.argv[2];
const ext = process.argv[3];

filter_module(dir, ext, (err, files) => {
    if (err) return console.error('Error has occurred:', err);
    
    files.forEach(file => {
        console.log(file);
    });
});


/* 回答例
var filterFn = require('./solution_filter.js')
var dir = process.argv[2]
var filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
    if (err) {
    return console.error('There was an error:', err)
    }

    list.forEach(function (file) {
    console.log(file)
    })
})
*/