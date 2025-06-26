/*11 - Faça um algoritmo com quatro notas obtidas por um aluno, calcule a média das notas
obtidas, imprima na tela o nome do aluno e se o aluno foi aprovado ou reprovado. Para o aluno
ser considerado aprovado sua média final deve ser maior ou igual a 7*/

let nome = "João"
let nota1 = 7       
let nota2 = 8
let nota3 = 6
let nota4 = 9
let media = (nota1 + nota2 + nota3 + nota4) / 4
console.log("Nome do aluno: " + nome)
console.log("Média final: " + media.toFixed(2))
if (media >= 7) {
    console.log("Aprovado")
}
else {
    console.log("Reprovado")
}


