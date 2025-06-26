/*4 - Faça um algoritmo que mostre através da sua idade e a da sua dupla quantos anos vocês
tinham ano passado e quantos anos terão ano que vem*/

let a1 = 21
let a2 = 30
let anoAtual = 2023
let anoPassado = anoAtual - 1
let anoFuturo = anoAtual + 1
let idade1AnoPassado = anoPassado - a1
let idade2AnoPassado = anoPassado - a2
let idade1AnoFuturo = anoFuturo - a1
let idade2AnoFuturo = anoFuturo - a2
console.log("Ano passado, você tinha " + idade1AnoPassado + " anos e sua dupla tinha " + idade2AnoPassado + " anos.")
console.log("Ano que vem, você terá " + idade1AnoFuturo + " anos e sua dupla terá " + idade2AnoFuturo + " anos.")
