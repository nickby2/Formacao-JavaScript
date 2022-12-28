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

for (let chave in cliente) {
    let tipo = typeof cliente[chave];
    if (tipo !== "object" && tipo !== "function") {
        console.log("A chave " + chave + " tem o valor " + cliente[chave]);
    }
}