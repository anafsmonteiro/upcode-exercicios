let num = 0;
let par = [], imp = [];

var prompt = require('prompt-sync')({ sigint: true });

for (let i = 1; i <= 30; i++) {
    num = parseInt(prompt("Digite um número:"));
    if (num % 2 == 0) {
        par.push(num);
        if (par.length == 5) {
            console.log(par);
            par.length = 0
        }
    } else {
        imp.push(num);
        if (imp.length == 5) {
            console.log(imp);
            imp.length = 0
        }
    }
}