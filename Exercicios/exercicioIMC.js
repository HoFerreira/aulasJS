const altura = 1.57;
const peso = 75;

const valorIMC = (peso / (altura * altura)).toFixed(1);

if (valorIMC < 18.5) {
    console.log('Está abaixo do peso.')
} else if (valorIMC < 25) {
    console.log('Com peso ideal. Parabéns.')
} else if (valorIMC < 30) {
    console.log('Levemente acima do peso.')
} else if (valorIMC < 35) {
    console.log('Com obesidade de grau 1.')
} else if (valorIMC < 40) {
    console.log('Com obesidade de grau 2.')
} else {
    console.log('Com obesidade de grau 3.')
} 

