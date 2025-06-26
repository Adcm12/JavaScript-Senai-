/*15 - Faça um algoritmo que pegue o ano em que uma pessoa nasceu, imprima na tela quantos
anos, meses e dias essa pessoa já viveu. Leve em consideração o ano com 365 dias e o mês
com 30 dias. (Ex: 5 anos, 2 meses e 15 dias de vida)*/

let anoNascimento = 2004
let mesNascimento = 7
let diaNascimento = 11
let anoAtual = 2025
let mesAtual = 5
let diaAtual = 16
let idadeAnos = anoAtual - anoNascimento
let idadeMeses = mesAtual - mesNascimento
let idadeDias = diaAtual - diaNascimento
if (idadeDias < 0) {
    idadeMeses -= 1
    idadeDias += 30
}
if (idadeMeses < 0) {
    idadeAnos -= 1
    idadeMeses += 12
}
console.log("A pessoa já viveu " + idadeAnos + " anos, " + idadeMeses + " meses e " + idadeDias + " dias.")
