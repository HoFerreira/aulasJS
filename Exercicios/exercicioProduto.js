/*
Código condição de pagamento
 1 - À vista Débito, recebe 10% de desconto
 2 - À vista no Dinheiro ou Pix, recebe 15% de desconto
 3 - Em duas vezes, preço normal sem juros
 4 - Acima de duas vezes,, preço normal mais juros de 10%
*/

let precoEtiqueta = 50;
const formaPagamento = 1;

if(formaPagamento === 1){
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
} else if (formaPagamento === 2) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
} else if (formaPagamento === 3) {
    console.log(precoEtiqueta)
} else {
    console.log(precoEtiqueta + (precoEtiqueta * 0.1))
}