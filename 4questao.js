//Faça um algoritmo que leia um vetor K[30]. Troque a seguir, todos os elementos de ordem ímpar do vetor com os elementos de ordem par imediatamente posteriores.

function geraNumeros(x) {
    let lista = []
    for (let i = 0; i < x; i++) {
        let random_number = Math.random() * 99.9999
        random_number = Number(random_number.toFixed(0))
        lista.push(random_number)
    }
    return lista
}
let k = geraNumeros(30);
let i, par = [], imp = [];

for (i = 0; i < 30; i++) {
    if (k[i] % 2 == 0) {

        par.push(k[i]);

    }
    if (k[i] % 2 != 0) {

        imp.push(k[i]);
    }
} 

console.log(k);
console.log("Par: ",par, "\nimpar: ",imp);
//console.log("Impar: ",imp);