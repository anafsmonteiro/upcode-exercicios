//Escreva um que leia um vetor G de 20 elementos caracter que representa o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de respostas (R) do aluno e conte o número de acertos. Mostre o nº de acertos do aluno e uma mensagem APROVADO, se a nota for maior ou igual a 6; e mostre uma mensagem de REPROVADO, caso contrário.


function geraNumeros(x) {
    let lista = []
    for (let i = 0; i < x; i++) {
        let random_number = Math.random() * 1
        random_number = Number(random_number.toFixed(0))
        lista.push(random_number)
    }
    return lista
}

let g = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let r = geraNumeros(10);
let nota = 0, soma = 0;
console.log(g);
console.log(r);

for (let i = 0; i <= 10; i++) {
    if (r[i] == g[i]) {
        nota++
    }
}
if (nota >= 6) {
    console.log(`\nSua notá é: ${nota} você foi APROVADO!`);
} else {
    console.log(`\nSua notá é: ${nota} você foi REPROVADO :(!`);
}

