//colocando o peso e a altura na função, quando chamar o valorIMC eu só preciso colocar o calcularImc
function calcularImc(peso, altura){
    return (peso / (altura * altura)).toFixed(1);
}

//A função classificarImc recebe o valor como parametro, verifica e retorna em qual faixa o IMC se encontra
function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Está abaixo do peso.';
    } else if (imc < 25) {
        return 'Com peso ideal. Parabéns.';
    } else if (imc < 30) {
        return 'Levemente acima do peso.';
    } else if (imc < 35) {
        return 'Com obesidade de grau 1.';
    } else if (imc < 40) {
        return'Com obesidade de grau 2.';
    } else {
        return 'Com obesidade de grau 3.';
    } 
}

//Main
(function () {
    const altura = 1.57;
    const peso = 75;
    
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();