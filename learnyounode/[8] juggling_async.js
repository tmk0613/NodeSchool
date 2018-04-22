// ASYNCジャグリング
// unreadable...
const http = require('http');
const bl = require('bl');
const url = {};
const results = [];

url.first = process.argv[2];
url.second = process.argv[3];
url.third = process.argv[4];

http.get(url.first, res => {
    res.pipe(bl((err, data) => {
        if (err) return console.error('bl 1st error:', err);

        data = data.toString();
        results.push(data);

        http.get(url.second, res => {
            res.pipe(bl((err, data) => {
                if (err) return console.error('bl 2nd error:', err);

                data = data.toString();
                results.push(data);

                http.get(url.third, res => {
                    res.pipe(bl((err, data) => {
                        if (err) return console.error('bl 3rd error:', err);
        
                        data = data.toString();
                        results.push(data);
                        console.log(results[0]);
                        console.log(results[1]);
                        console.log(results[2]);
                    }));
                });
            }));
        });
    }));
});


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