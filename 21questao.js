//Faça um algoritmo que leia um código numérico inteiro e um vetor de 50 posições de números. Se o código for zero, termine o algoritmo. Se o código for 1, mostre o vetor na ordem como ele foi lido. Se o código for 2, mostre o vetor na ordem inversa, do último até o primeiro

function geraNumeros(x) {
    let lista = []
    for (let i = 0; i < x; i++) {
        let random_number = Math.random() * 100
        random_number = Number(random_number.toFixed(0))
        lista.push(random_number)
    }
    return lista
}

function geraNumero(x) {
    let lista = []
    for (let i = 0; i < x; i++) {
        let random_number = Math.random() * 2
        random_number = Number(random_number.toFixed(0))
        lista.push(random_number)
    }
    return lista
}

let vetor = geraNumeros(10);
let num = geraNumero(1);
let i;

console.log(`vetor: ${vetor}`);
console.log(`Número: ${num}`);


if (num == 0) {
    console.log(`\nFim`);
} else if (num == 1) {
    console.log(`${vetor}`);
} else if (num == 2) {
    vetor.reverse();
    console.log(`\nO vetor inverso: ${vetor}`);
}