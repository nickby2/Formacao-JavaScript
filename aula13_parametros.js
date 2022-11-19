// Parâmetros de função


function soma(num1, num2){
    return num1 + num2;
}

console.log(soma(2, 2));
console.log(soma(50, 500));
console.log(soma(50, 8000000));
console.log("------------------------------------------");

function nomeIdade(nome1, idade1){
    return "Meu nome é " + nome1 + " e eu tenho " + idade1 + " anos";
}

console.log(nomeIdade("Lucas Rodrigues Monteiro", 27));

function multiplica(num1, num2){
    return num1 * num2;
}

console.log(multiplica(soma(9, 10), soma(15, 16)));