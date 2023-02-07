//Escrever um algoritmo que lê 2 vetores X(10) e Y(10) . Crie, a seguir, um vetor Z que seja

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
let z = [], dif = [], soma = [], prod = [];
let i;

//a) a diferença entre X e Y;
console.log(`X: ${x}`);
console.log(`Y: ${y}`);

for (i = 0; i < 10; i++) {
    dif.push = (x[i] - y[i])
    z[i] = dif.push;
}


console.log(`\nA diferença entre X e Y é: ${z}`);

// a soma entre X e Y;

for (i = 0; i < 10; i++) {
    soma.push = (x[i] + y[i]);
    z[i] = soma.push;
}

console.log(`\nA soma entre X e Y é: ${z}`);

// o produto entre X e Y

for (i = 0; i < 10; i++) {
    prod.push = (x[i] * y[i]);
    z[i] = prod.push;
}

console.log(`\nO produto entre X e Y é: ${z}`);