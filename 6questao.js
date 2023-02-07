//Faça um algoritmo que leia dois vetores: F[20] e G[20]. Calcule e mostre, a seguir, o produto dos valores de F por G

function geraNumeros(x) {
    let lista = []
    for (let i = 0; i < x; i++) {
        let random_number = Math.random() * 99.9999
        random_number = Number(random_number.toFixed(0))
        lista.push(random_number)
    }
    return lista
}

let f = geraNumeros(20);
let g = geraNumeros(20);

let prod = [];
let aux=0;

for (let i=0; i < 20; i++) {
   prod[i]=(f[i]*g[i]);
}

console.log(`vetor F: ${f} \n vetor G:  ${g}`);
console.log(`produto: ${prod}`)