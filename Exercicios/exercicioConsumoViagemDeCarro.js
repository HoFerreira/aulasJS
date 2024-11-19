/* Faça um programa para calcular o valor de uma viagem

Você terá 3 variáveis

1 - Preço do combustível
2 -  Gasto médio de combustível do carro por KM
3 - Distância em KM da viagem

*/

let precoCombustivel = 6.01;
const kmPorLitro = 14;
const distanciaKm = 132;

const litrosCosumidos = distanciaKm / kmPorLitro;
const valorCombustivel = litrosCosumidos * precoCombustivel;

console.log(`A viagem vai custar ${valorCombustive.toFixed(2)}.`);