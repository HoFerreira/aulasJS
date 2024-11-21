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

//Instancia é uma ocorrencia daquele objeto
const H = new Pessoa('Hosana F', 27);
const R = new Pessoa('Juana', 20);

H.descrever();
R.descrever();