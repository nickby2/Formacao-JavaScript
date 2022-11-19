
//String()

let telefone1 = 12341234;
console.log("O telefone é " + String(telefone1)); 
console.log("-------------------------------------------------------");
// teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings

//toString()

let telefone2 = 12341234;
console.log("O telefone é " + telefone2.toString()); // o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.

let usuarioConectado = false;
console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
usuarioConectado = true;
console.log(String(usuarioConectado)); // agora teremos uma string “true”.

console.log("-------------------------------------------------------");

//Number

// Vamos calcular a área de um retângulo
let largura1 = "10";
let altura1 = "5";
console.log(Number(largura1) * Number(altura1)); // teremos a conversão de String para números, possibilitando a realização da da multiplicação

console.log("Podemos usar o operador de soma + para fazer a conversão de textos para números, colocando-os antes das variáveis:");
let largura2 = "10";
let altura2 = "5";
console.log( + largura2 * + altura2); // teremos a conversão de String para números realizado usando o + antes das variáveis

let meuNome = "leonardo";
console.log(Number(meuNome)); // como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);
console.log( + meuNome); // a conversão também retornará NaN

let usuarioConectado2 = false;
console.log(Number(usuarioConectado2)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado2 = true;
console.log(Number(usuarioConectado2)); // agora teremos a conversão de true (verdadeiro) para o número 1.