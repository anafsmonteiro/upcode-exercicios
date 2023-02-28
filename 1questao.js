let num = 0;
let par = [], imp = []; 

var prompt = require('prompt-sync')({ sigint: true });

for (let i = 1; i <= 30; i++) {
    num = parseInt(prompt("Digite um número:"));
    if (num % 2 == 0) {
        par.push(num);
        if (par.length == 6) {
            par.splice(0,1)
            console.log(`PAR: ${par}`);
        }
    } else {
        imp.push(num);
        if (imp.length == 6) {
            imp.splice(0,1)
            console.log(`IMPARr: ${imp}`);
        }
    }
}
console.log(par);
console.log(imp);
