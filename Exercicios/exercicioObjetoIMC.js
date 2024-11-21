/* 
Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculoIMC(){
        return (this.peso / (this.altura * this.altura));
    }

    descrever(){
        const IMC = this.calculoIMC();
        const classificacao = classificarImc(IMC);
        console.log(`O ${this.nome} pesa ${this.peso} e tem a altura ${this.altura}. Entao o seu IMC é ${IMC.toFixed(1)} e o seu índicie é: ${classificacao}`);
    }
}

function classificarImc(IMC){
    if (IMC < 18.5) {
        return 'Está abaixo do peso.';
    } else if (IMC < 25) {
        return 'Com peso ideal. Parabéns.';
    } else if (IMC < 30) {
        return 'Levemente acima do peso.';
    } else if (IMC < 35) {
        return 'Com obesidade de grau 1.';
    } else if (IMC < 40) {
        return'Com obesidade de grau 2.';
    } else {
        return 'Com obesidade de grau 3.';
    } 
}

const Jose = new Pessoa('José', 75, 1.60);
const Margarida = new Pessoa('Margarida', 100, 1.95);
Jose.descrever();
Margarida.descrever();