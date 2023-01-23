const listaLivros = require('./aula39_array');

function mergeSort(array, nivelAlinhamento = 0) {

    console.log('nível de alinhamento: ' + nivelAlinhamento);
    console.log(array);

    if (array.length > 1) {
        const meio = Math.floor(array.length / 2);
        const part1 = mergeSort(array.slice(0, meio), nivelAlinhamento++);
        const part2 = mergeSort(array.slice(meio, array.length), nivelAlinhamento++);
        array = ordena(part1, part2);
    }

    return array;
}

function ordena(part1, part2) {
    let posicaoAtualPart1 = 0;
    let posicaoAtualPart2 = 0;
    const resultado = [];

    while (posicaoAtualPart1 < part1.length && posicaoAtualPart2 < part2.length) {
        let produtoAtualPart1 = part1[posicaoAtualPart1];
        let produtoAtualPart2 = part2[posicaoAtualPart2];

        if (produtoAtualPart1.preco < produtoAtualPart2.preco) {
            resultado.push(produtoAtualPart1);
            posicaoAtualPart1++;
        } else {
            resultado.push(produtoAtualPart2);
            posicaoAtualPart2++;
        }
    }

    return resultado.concat(posicaoAtualPart1 < part1.length ?
        part1.slice(posicaoAtualPart1) : part2.slice(posicaoAtualPart2));
}

console.log(mergeSort(listaLivros));