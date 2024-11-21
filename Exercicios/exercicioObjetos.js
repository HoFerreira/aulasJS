/*
Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.

Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
*/

class Veiculo {
  marca;
  cor;
  gastoMedio;

  constructor(marca, cor, gastoMedio) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedio = gastoMedio;
  }

  calcularGastoDePercurso(distancia, precoCombustivel){
    return ((distancia * this.gastoMedio) * precoCombustivel);
  }

  descrever(distancia, precoCombustivel) {
    const gasto = this.calcularGastoDePercurso(distancia, precoCombustivel);
    console.log(`O carro da marca ${this.marca} é da cor ${this.cor} e faz ${this.gastoMedio.toFixed(3)}km por litro. Viajando ${distancia}km vai gastar ${gasto.toFixed(2)} reais`);
  }
}

//Criando o objeto veiculo
const Audi = new Veiculo('Audi A3', 'Preta', 1/8);
const Honda = new Veiculo('Honda Fit', 'Prata', 1/13);
//Chamando o método descrever
Audi.descrever(133, 6.01);
Honda.descrever(133, 6.01)




