// == (comparação implícita)

const num1 = 5; 
const text1 = "5";

console.log(num1 == text1); 
console.log("-------------------------------------");

const num2 = 5; 
const text2 = "5";

console.log(num2 === text2);
console.log("-------------------------------------");

console.log("== só compara o valor");
console.log("=== só compara o tipo de dado");
console.log("Conversão precisa ser explicita com Number() é String()");
console.log("-------------------------------------");


console.log(typeof num1);
console.log(typeof text1);
console.log(typeof num2);
console.log(typeof text2);  