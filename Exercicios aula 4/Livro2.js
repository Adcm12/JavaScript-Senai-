/* 2 - Crie uma nova variável chamada anoAtual e atribua a ela o ano atual (utilize new Date().getFullYear()). Crie um
objeto chamado livro com as seguintes propriedades: título, autor, ano de publicação e gênero.

Adicione a propriedade idadePublicacao diretamente ao objeto livro, representando há quantos anos o livro foi
publicado. Calcule essa idade subtraindo o anoDePublicacao do anoAtual.

Crie uma string chamada mostrarDetalhes contendo os detalhes do livro, incluindo a informação da idade de
publicação.

Exiba a string mostrarDetalhes no console para verificar se as informações, incluindo a idade de publicação, são
exibidas corretamente. */

const anoAtual = new Date().getFullYear()

const livro = {
    titulo: "Harry Potter e a Câmara Secreta",
    autor: "J.K. Rowling",
    anoPublicacao: 1998,
    genero: "Fantasia",
    idadePublicacao: anoAtual - 1998 
}

const mostrarDetalhes = `Título: ${livro.titulo}\nAutor: ${livro.autor}\nAno de Publicação: ${livro.anoPublicacao}\nGênero: ${livro.genero}\nIdade de Publicação: ${livro.idadePublicacao} anos`
console.log(mostrarDetalhes)

