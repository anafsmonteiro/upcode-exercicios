//Escrever um algoritmo que lê um vetor K(15). Crie, a seguir, um vetor P, que contenha todos os números primos de K. Escreva o vetor P.

let num = [3, 5, 7, 8, 6, 9];
let cont = 0, i = 0;
let p = [];

console.log(num);

for (let cont = 0; cont < num.length; cont++) {
    let primo = true;

    for (let i = 2; i < i; i++) {
        primo = false;
        if (cont % i == 0) {
            primo = false;
        } 
    }
}
console.log(p);
