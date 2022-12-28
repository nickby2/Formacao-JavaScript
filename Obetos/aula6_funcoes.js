const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "1236547895",
    email: "alura@gmail.com",
    telefone: ["131657865", "6989898768"],
    saldo: 200,
    efetuandoPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente.");
        }
        else {
            this.saldo -= valor;
            console.log("Pagamento realizado. Novo Saldo: " + this.saldo);
        }
    },
};

cliente.efetuandoPagamento(200);