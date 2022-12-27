const salaJS = [7, 8, 7, 7.8, 6.5, 4.7, 7.8];
const salaJava = [7, 8, 3, 7.8, 6.5, 4.7, 7.8];
const salaPython = [7, 8, 8, 7.7, 2.5, 4.7, 7.8];

function calculoaMedia(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {
        return acumulador + nota;
    }, 0);
    const media = somaDasNotas / notasDaSala.length;

    return media;

}

console.log(calculoaMedia(salaJS));
console.log(calculoaMedia(salaJava));
console.log(calculoaMedia(salaPython));