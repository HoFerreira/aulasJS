const numero = 0;
const numeroDivisivelPor5 = (numero % 5)  === 0;

if (numero === 0) {
    console.log('O numero é inválido')
} else if (numero === 5) {
    console.log('Sim')
} else {
    console.log('Não')
}