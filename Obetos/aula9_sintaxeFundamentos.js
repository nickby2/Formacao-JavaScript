const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "1236547895",
    email: "alura@gmail.com",
    telefone: ["131657865", "6989898768"],
};

cliente.enderecos = [
    {
        rua: "R. joseph Climber ",
        numero: 1337,
        apartamento: "ap 934",
    },
];

function ligarParaCliente(telefoneComercial, telefoneResidencial) {
    console.log("Ligando para " + telefoneComercial);
    console.log("Ligando para " + telefoneComercial);
}

ligarParaCliente(cliente.telefone[0], cliente.telefone[1]);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
}

console.log(encomenda);