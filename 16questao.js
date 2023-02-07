//Escrever um algoritmo que lê 2 vetores de tamanho 10. Crie, a seguir, um vetor S de 20 posições que contenha os elementos dos outros 2 vetores em ordem crescente. Obs.: copie primeiro os valores para o vetor S para depois rdenálos

function geraNumeros(x) {
    let lista = []
    for (let i = 0; i < x; i++) {
        let random_number = Math.random() * 99.9999
        random_number = Number(random_number.toFixed(0))
        lista.push(random_number)
    }
    return lista
}

let x = geraNumeros(10);
let y = geraNumeros(10);
let s = [];
let a = 0, b = 0;

console.log(`X: ${x}\nY: ${y}`);

for (let i = 0; i < 10; i++) {
    s = x.concat(y)
}

console.log(`\nS concatenado:${s}`);

for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
        s.sort(function (a, b) {
            return a - b;
        });
    }

}
console.log(`\nS ordenado: ${s}`);