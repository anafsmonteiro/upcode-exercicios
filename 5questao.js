function geraNumeros(x) {
    let lista = []
    for (let i = 0; i < x; i++) {
        let random_number = Math.random() * 99.9999
        random_number = Number(random_number.toFixed(0))
        lista.push(random_number)
    }
    return lista
}

let s = geraNumeros(20);
let prod = [];
let a = geraNumeros(1);
console.log('S: ', s, '\nA: ', a)

for (let i = 0; i < 20; i++) {
    prod.push(s[i] * a);
}

console.log('O produto da variável A pelo vetor S = ', prod);