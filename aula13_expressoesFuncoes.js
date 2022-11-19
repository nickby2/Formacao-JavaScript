function funcao(){
    // bloco de codigo
}


// Expressão de funcões

const soma = function(num1, num2) {return num1 + num2};
const subtrair = function(num1, num2) {return num1 - num2};
const multiplica = function(num1, num2) {return num1 * num2};
const divide = function(num1, num2) {return num1 / num2};

console.log(soma(15, 30));
console.log(subtrair(soma(15, 30), 44));
console.log(multiplica(soma(55, 11), 33));
console.log(divide(70, 4));

// diferença principal: HOISTING
// funções e var são "listadas" no topo