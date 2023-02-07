//Escreva um algoritmo que leia um vetor de 20 posições e mostre- o. Em seguida, troque o primeiro elemento com o último, o segundo com o penúltimo, o terceiro com o antepenúltimo, e assim sucessivamente. Mostre o novo vetor depois da troca.

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
let aux1 = [], aux2 = [];

console.log(`Vetor: ${vetor}`);

for(let i=10;i<=19;i++){
    for(let j=0;j<=9;j++){
        aux1[j] = vetor[j];
    }
    aux2[i] = vetor[i];
}

console.log('vetor: ',vetor,'\n');
console.log('aux1: ',aux1,'\n','aux2: ',aux2);
aux1.reverse();
aux2.reverse();
console.log(aux1);
console.log(aux2);
vetor = aux2.concat(aux1);
console.log(`\nVetor trocando posições: ${vetor}`);