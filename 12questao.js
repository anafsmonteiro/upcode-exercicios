//Escreva um algoritmo que leia um vetor inteiro de 30 posições e crie um segundo vetor, substituindo os valores nulos por 1. Mostre os 2 vetores.

function geraNumeros(x) {
    let lista = []
    for (let i = 0; i < x; i++) {
        let random_number = Math.random() * 10
        random_number = Number(random_number.toFixed(0))
        lista.push(random_number)
    }
    return lista
}

let vetor = geraNumeros(10);
let nulos = [];
console.log(vetor);

for (i = 0; i < 10; i++) {
    if (vetor[i] == 0) {
        vetor[i] += 1
    }
}
console.log(vetor);