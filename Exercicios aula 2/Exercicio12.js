/*12 - Faça um algoritmo que pegue o valor de um produto e determine o valor que deve ser
pago, conforme a escolha da forma de pagamento pelo comprador e imprima na tela o valor
final do produto a ser pago. Utilize os códigos da tabela de condições de pagamento para
efetuar o cálculo adequado.
Tabela de Código de Condições de Pagamento
1 - À Vista em Dinheiro ou Pix, recebe 15% de desconto
2 - À Vista no cartão de crédito, recebe 10% de desconto
3 - Parcelado no cartão em duas vezes, preço normal do produto sem juros
4 - Parcelado no cartão em três vezes ou mais, preço normal do produto mais juros de 10*/

let valorProduto = 1000
let formaPagamento = 4 // 1 - À Vista em Dinheiro ou Pix, 2 - À Vista no cartão de crédito, 3 - Parcelado no cartão em duas vezes, 4 - Parcelado no cartão em três vezes ou mais
let valorFinal
switch (formaPagamento) {
    case 1:
        valorFinal = valorProduto - (valorProduto * 0.15)
        console.log("Valor a ser pago: R$ " + valorFinal.toFixed(2))
        break
    case 2:
        valorFinal = valorProduto - (valorProduto * 0.10)
        console.log("Valor a ser pago: R$ " + valorFinal.toFixed(2))
        break
    case 3:
        valorFinal = valorProduto
        console.log("Valor a ser pago: R$ " + valorFinal.toFixed(2))
        break
    case 4:
        valorFinal = valorProduto + (valorProduto * 0.10)
        console.log("Valor a ser pago: R$ " + valorFinal.toFixed(2))
        break
    default:
        console.log("Forma de pagamento inválida")
}
