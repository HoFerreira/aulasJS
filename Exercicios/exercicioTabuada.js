//Crie um programa que dado um número imprima a sua tabuada

const numero = 9;
const tabuada = [];

for (let i = 0; i < 10; i++){
    tabuada[i] = (numero * (i + 1));
}

console.log(tabuada);