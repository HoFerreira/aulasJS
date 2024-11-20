/*
Código condição de pagamento
 1 - À vista Débito, recebe 10% de desconto
 2 - À vista no Dinheiro ou Pix, recebe 15% de desconto
 3 - Em duas vezes, preço normal sem juros
 4 - Acima de duas vezes,, preço normal mais juros de 10%
*/

function aplicarDesconto(valor, desconto){
    return (valor - (precoEtiqueta *(desconto/100)));
}

function aplicarJuros(valor, juros){
    return (valor + (precoEtiqueta *(juros/100)));
}

let precoEtiqueta = 100;
const formaPagamento = 4;

if(formaPagamento === 1){
    console.log(aplicarDesconto(precoEtiqueta, 10));
} else if (formaPagamento === 2) {
    console.log(aplicarDesconto(precoEtiqueta, 15));
} else if (formaPagamento === 3) {
    console.log(precoEtiqueta);
} else {
    console.log(aplicarJuros(precoEtiqueta, 10));
}
