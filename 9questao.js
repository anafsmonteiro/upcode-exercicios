//Escreva um algoritmo que leia um vetor de 100 posições e mostre-o ordenado em ordem crescente

function geraNumeros(x) {
    let lista = []
    for (let i = 0; i < x; i++) {
        let random_number = Math.random() * 99.9999
        random_number = Number(random_number.toFixed(0))
        lista.push(random_number)
    }
    return lista
}

let vetor = geraNumeros(10);
let i, a = 0, b = 0;

console.log(`${vetor}`);

for (i = 0; i < 10; i++) {
    a = vetor[i];
    b = vetor[i + 1];

    vetor.sort(function (a, b) {
        return a - b;
    });
}
console.log(`\nVetor ordenado: ${vetor}`);