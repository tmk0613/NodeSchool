const arg = process.argv;
let total = 0;
for (let i=2, len=arg.length; i < len; i++) {
    total += Number(arg[i]);
}
console.log(total);