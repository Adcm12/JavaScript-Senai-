/*13 - Faça um algoritmo com o nome e a idade de uma pessoa e imprima na tela o nome da
pessoa e sua faixa etária conforme tabela abaixo.
Infância: 0-12 anos
Adolescência: 13-17 anos
Adulto: 18-64 anos
Idoso: 65 anos ou mais*/

let nome = "Maria"
let idade = 25
console.log("Nome: " + nome)
console.log("Idade: " + idade)
if (idade >= 0 && idade <= 12) {
    console.log("Faixa etária: Infância")
}
else if (idade >= 13 && idade <= 17) {
    console.log("Faixa etária: Adolescência")
} else if (idade >= 18 && idade <= 64) {
    console.log("Faixa etária: Adulto")
} else if (idade >= 65) {
    console.log("Faixa etária: Idoso")
} else {
    console.log("Idade inválida")
}
