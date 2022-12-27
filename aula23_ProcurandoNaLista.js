const alunos = ["Luna", "Duda", "Lu"];
const medias = [8, 8, 7];

const listMedias = [alunos, medias];

function exibeNota(aluno) {
    if (listMedias[0].includes(aluno)) {
        //const alunos = listMedias[0];
        //const medias = listMedias[1];

        const [alunos, medias] = listMedias;

        const indice = alunos.indexOf(aluno);

        const mediaDoAluno = medias[indice];

        console.log(aluno + ' Tem a média ' + mediaDoAluno);
    } else {
        console.log("Aluno não está cadastrado!");
    }
}

exibeNota("Lu");