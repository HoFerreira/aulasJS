const notas = [];

notas.push(8);
notas.push(5);
notas.push(9);
notas.push(5);
notas.push(9);
notas.push(10);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;
console.log(media.toFixed(2));