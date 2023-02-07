//Elaborar um algoritmo que lê uma matriz M(6,6) e um valor A e multiplica a matriz M pelo valor A e coloca os valores da matriz multiplicados por A em um vetor de V(36) e escreve no final o vetor V

function geraNumeros(x) {
    let lista = []
    for (let i = 0; i < x; i++) {
        let random_number = Math.random() * 99.9999
        random_number = Number(random_number.toFixed(0))
        lista.push(random_number)
    }
    return lista
}

let m = geraNumeros(36);
let a = 2;
let v = [];

for (let i = 0; i < 36; i++) {
    v.push(m[i] * a);
}
console.log(`matriz: ${m}`);
console.log(`operador: ${a}`);
console.log(`resultado do produto: ${v}`);
