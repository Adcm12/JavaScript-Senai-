/*2 - Faça um algoritmo que faça a idade de um integrante da dupla, menos a idade do outro
integrante, imprima na tela se o resultado é par ou ímpar, positivo ou negativo.*/

let a1 = 21
let a2 = 30

let c = a1 - a2

if ( c % 2 == 0){
    console.log("A resta de suas idades e par")
} else
{
    console.log("A resta de suas idades e impar")
}
if ( c < 0){
    console.log("A resta da um numero negativo")
} else{
    console.log("A resta da um numero positivo")
}