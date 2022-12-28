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

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")) {
    console.error("Erro. É necessário ter um endereço cadastrado.");
}