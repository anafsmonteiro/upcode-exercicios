//Escreva um algoritmo que leia 50 valores para um vetor de 50 posições. Mostre depois somente os positivos.

function geraNumeros(x) {
    let lista = []
    for (let i = 0; i < x; i++) {
        let random_number = Math.random() * (20 + 1) - 5
        random_number = Number(random_number.toFixed(0))
        lista.push(random_number)
    }
    return lista
}

let vetor = geraNumeros(50);
let posi = [];
console.log(vetor);

for (i = 0; i < 50; i++) {
    if (vetor[i] > 0) {
        posi.push(vetor[i])
    }
}
console.log(posi);