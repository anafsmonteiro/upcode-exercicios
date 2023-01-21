function geraNumeros(x) {
  let lista = []
  for (let i = 0; i < x; i++) {
    let random_number = Math.random() * 99.9999
    random_number = Number(random_number.toFixed(0))
    lista.push(random_number)
  }
  return lista
}

let n = geraNumeros(20);
let menor = 0, posicao = 0, i;

console.log(n)

menor = n[0];

for (let i = 0; i < n.length; i++) {
  if (n[i] < menor) {
    menor = n[i];
    posicao = i;
  }
}

console.log('O menor elemento de N é ', menor, ' e sua posição dentro do vetor é: ', posicao);