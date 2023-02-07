//Escreva um algoritmo que leia e mostre um vetor de 20 números. A seguir, conte quantos valores pares existem no vetor

function geraNumeros(x) {
    let lista = []
    for (let i = 0; i < x; i++) {
        let random_number = Math.random() * 99.9999
        random_number = Number(random_number.toFixed(0))
        lista.push(random_number)
    }
    return lista
}

let vetor = geraNumeros(20);
let i, posi = 0;

for (i = 0; i < 20; i++) {
    if (vetor[i] > 0) {
        posi = posi + 1;
    }
}
console.log(`vetor: ${vetor}`);
console.log(`Pares: ${posi}`);