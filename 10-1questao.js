//http://www.linhadecodigo.com.br/artigo/3554/funcoes-de-manipulacao-de-vetores-do-javascript.aspx`

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

console.log(`Vetor: ${vetor}`);
vetor.reverse();
console.log(vetor);