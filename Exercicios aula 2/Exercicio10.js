/*10 - Faça um algoritmo que pegue três notas obtidas por um aluno, e imprima na tela a média
das notas que têm pesos diferentes. Crie mais 3 variáveis com os 3 pesos diferentes para
realizar o cálculo.*/

let nota1 = 7
let nota2 = 8
let nota3 = 9
let peso1 = 2
let peso2 = 3
let peso3 = 5
let media = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3)
console.log("A média ponderada é: " + media.toFixed(2))
