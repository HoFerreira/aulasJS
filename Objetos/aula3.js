//Classe é a definiçao do que deve ser aquele objeto
class Pessoa {
    nome;
    idade;
    anoNascimento;

    constructor(nome, idade, anoNascimento) {
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2024 - idade;
    }
    
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} e eu nasci em ${this.anoNascimento}`);
    }
}

function compararPessoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p1.idade < p2.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`Tem a mesma idade`);
    }
}

const H = new Pessoa('Hosana', 27);
const L = new Pessoa('Luiza', 27);

compararPessoas(H, L);