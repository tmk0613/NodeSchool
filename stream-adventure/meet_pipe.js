const fs = require('fs');
const file = process.argv[2];

fs.createReadStream(file).pipe(process.stdout);

/* Reference solution
var fs = require('fs');
var file = process.argv[2];
fs.createReadStream(file).pipe(process.stdout);
*/