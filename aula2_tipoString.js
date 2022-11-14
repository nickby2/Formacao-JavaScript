const text1 = "Olá mundo!";
const text2 = "ola mundi";

const sitacao = 'O Leo disse "oi"';

console.log(text1);
console.log(text2);
console.log(sitacao);

//Concatenação (+)

const sitacao2 = "Meu nome é";
const sitacao3 = " Leonardo"
console.log(sitacao2 + sitacao3);

//Conversão de codigo

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

//Padronizando Strings:

const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();
//toLowerCase() que converte todos os caracteres da string 
//informada (no caso, input) para letras minúsculas (se 
//forem algarismos, nada é convertido).

console.log(cidade === inputMinusculo); // true

// lenght: Conta os caracteres

const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres


//Templste String ou Template Real