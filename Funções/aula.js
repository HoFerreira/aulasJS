function incrementarJuros(valor, percenntualJuros) {
    const valorDeAcrescimo = (percenntualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));