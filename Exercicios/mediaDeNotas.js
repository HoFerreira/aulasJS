/*
Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = {(nota 1 + nota 2 + nota 3) / 3}

Classificação:
    Média menor que 5, reprovado
    Média entre 5 e 7, recuperação
    Média acima de 7, passou de semetre
*/

let nota1 = 8;
let nota2 = 5.9;
let nota3 = 7;
const media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log(`Sua nota foi ${media.toFixed(1)}. Reprovado.`)
} else if (media > 5 && media < 7) {
    console.log(`Sua nota foi ${media.toFixed(1)}. Recuperação.`)
} else {
    console.log(`Sua nota foi ${media.toFixed(1)}. Parabens vc passou de semestre.`) 
}