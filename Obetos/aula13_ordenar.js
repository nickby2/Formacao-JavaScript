const clientes = require("./aula11_clientes.json");

function ordenar(lista, propriedade) {
    const resultado = lista.sort((a, b) => {
        if (a[propriedade] < b[propriedade]) {
            return -1;
        }
        if (a[propriedade] > b[propriedade]) {
            return 1;
        }
        return 0;
    })
    return resultado;
}

const ordenardoNome = ordenar(clientes, 'nome');

console.log(ordenardoNome);