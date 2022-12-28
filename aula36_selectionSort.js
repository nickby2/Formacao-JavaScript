const livros = require("./aula35_listaLivros");
const menorValor = require("./aula36_MenorValor");

for (let i = 0; i < livros.length - 1; i++) {
    let menor = menorValor(livros, i);

    let livroAtual = livros[i];
    console.log("livro atual ", livros[i])
    let livroMenorPreco = livros[menor];
    console.log("livro menor preço ", livros[menor]);

    livros[i] = livroMenorPreco;
    livros[menor] = livroAtual;

}

console.log(livros);