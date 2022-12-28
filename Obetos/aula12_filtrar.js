const clientes = require("./aula11_clientes.json");

function FiltrarApartamentoSemComplemento(clientes) {
    return clientes.filter((cliente) => {
        return (
            cliente.endereco.apartamento &&
            !cliente.endereco.hasOwnProperty("complemento")
        );
    });
}

const filtrados = FiltrarApartamentoSemComplemento(clientes);
console.log(filtrados);