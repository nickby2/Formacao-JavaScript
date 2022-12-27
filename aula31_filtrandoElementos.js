const alunos = ['ana Julia', 'Caio Vinicius', 'BIA silva'];
const medias = [10, 6.5, 8, 7.5];

const reprovados = alunos.filter((aluno, indice) => {
    return medias[indice] >= 7;
})

console.log(reprovados);