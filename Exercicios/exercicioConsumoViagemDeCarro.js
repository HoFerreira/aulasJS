/* Faça um programa para calcular o valor de uma viagem

Você terá 3 variáveis

1 - Preço do combustível
2 -  Gasto médio de combustível do carro por KM
3 - Distância em KM da viagem

*/

let precoGasolina = 6.01;
let precoAlcool = 4.01;
const kmPorLitro = 11;
const distanciaKm = 132;

const litrosCosumidos = distanciaKm / kmPorLitro;
const valorGastoEmGasolina = litrosCosumidos * precoGasolina;
const valorGastoEmAlcool = litrosCosumidos * precoAlcool;

console.log(`Em gasolina a viagem vai custar ${valorGastoEmGasolina.toFixed(2)} e no alcool vai custar ${valorGastoEmAlcool.toFixed(2)}.`);

