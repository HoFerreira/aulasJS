//Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado

const numeros = [];

numeros.push(1);
numeros.push(2);
numeros.push(4);
numeros.push(5);
numeros.push(9);

console.log(`Pares encontrados: `)
for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 === 0){
        console.log(numeros[i]);
    }
}