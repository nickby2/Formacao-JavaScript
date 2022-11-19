function funcao(nome){
    return "meu nome é " + nome;
}

console.log(funcao("Lucas"));

const arrow = nome => "Meu nome é " + nome;
console.log(arrow("Pedro"));

console.log("------------------------------------------")
const soma = (num1, num2) => num1 + num2;
const subtrair = (num1, num2) => num1 - num2;
const multiplica = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

console.log(soma(15, 30));
console.log(subtrair(soma(15, 30), 44));
console.log(multiplica(soma(55, 11), 33));
console.log(divide(70, 4));

console.log("------------------------------------------")
const soma2 = (num1, num2) => {
    if(num1 > 10 || num2 >10 ){
        return "Somente números de 1 a 9"
    }else{
        return num1 + num2;
    }
}

console.log(soma2(5,11));