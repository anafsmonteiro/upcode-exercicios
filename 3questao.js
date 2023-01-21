function geraNumeros(x) {
    let lista = []
    for (let i = 0; i < x; i++) {
        let random_number = Math.random() * 99.9999
        random_number = Number(random_number.toFixed(0))
        lista.push(random_number)
    }
    return lista
}

let a = geraNumeros(10), b = geraNumeros(10), c = [];
console.log('A: ', a);
console.log('B: ', b);

for (let i = 0; i < 10; i++) {
    c[i] = a[i] * b[i];
}
console.log('C: ', c);