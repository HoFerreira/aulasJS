/* Faça um programa para calcular o valor de uma viagem

Você terá 5 variáveis

1 - Preço do etanol
2 - Preço da gasolina
3 - Tipo de combustivel que esta no carro
4 - Gasto médio de combustível do carro por KM
5 - Distância em KM da viagem

*/

let precoEtanol = 4.53;
let precoGasolina = 6.11;
const kmPorLitro = 8;
const distanciaKm = 600;
const tipoCombustivel = "Etanol";

const litrosCosumidos = distanciaKm / kmPorLitro;

if (tipoCombustivel === "Etanol") {
  const valorGasto = litrosCosumidos * precoEtanol;
    console.log(`O valor da viagem vai ser ${valorGasto.toFixed((2))}.`)
} else {
  const valorGasto = litrosCosumidos * precoGasolina;
  console.log(`O valor da viagem vai ser ${valorGasto.toFixed((2))}.`)
}
