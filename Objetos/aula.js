//Classe é a definiçao do que deve ser aquele objeto
class Pessoa {
    nome;
    idade;
    
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

//Instancia é uma ocorrencia daquele objeto
const H = new Pessoa();
H.nome = 'Hosana F';
H.idade = 27;

const R = new Pessoa();
R.nome = 'Rui';
R.idade = 19;

console.log(H);
console.log(R);

H.descrever();
R.descrever();