//Escreva um algoritmo que leia dois vetores de 10 posições e faça a multiplicação dos elementos de mesmo índice, colocando o resultado em um terceiro vetor. Mostre o vetor resultante.

function geraNumeros(x) {
    let lista = []
    for (let i = 0; i < x; i++) {
        let random_number = Math.random() * 99.9999
        random_number = Number(random_number.toFixed(0))
        lista.push(random_number)
    }
    return lista
}

let f = geraNumeros(10);
let g = geraNumeros(10);

let prod = [];
let aux=0;

for (let i=0; i < 10; i++) {
   prod[i]=(f[i]*g[i]);
}

console.log(`vetor F: ${f} \n vetor G:  ${g}`);
console.log(`produto: ${prod}`)