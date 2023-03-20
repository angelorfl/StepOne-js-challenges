// Escreva dentro do console usando operadores lógicos
// seguindo o exemplo:

// exemplo:
// se a pessoa é adulta (isAdult) e tem um carro (car), ela pode dirigir (canDrive)

// solução:
//let isAdult = true;
//let car = true;
//let canDrive = isAdult && car
//console.log(canDrive); //answer: true;


// 1 - se a pessoa é adulta (isAdult) e tem uma cerveja (beer), ela pode beber se quiser (canDrink)

//let isAdult = true;
//let beer = true;
//let canDrink = isAdult && beer
//console.log(canDrink);



// 2 - se está chovendo (rain) e voce tem um guardachuva (umbrella)
// Faça uma variável com o nome de molhado (wet)
// que precisa mudar de acordo com o valor de rain e umbrella. 
// Complete o código:

let rain = true;
let umbrella = false;
let wet;

if (rain && umbrella) {
    wet = true;
    console.log("Posso sair na chuva");
} else {
    wet = false;
    console.log("Não posso sair na chuva")
}
console.log("ok")
// 3 - se a pessoa é estudante (student) ou é aposentado (retired),
// ela pode ter desconto no ingresso do show (discount)

let student = true;
let retired = false;
let discount;

if (student == true) {
    console.log("É estudante e pode ter desconto");
} else {
    console.log("Não é estudante e não pode ter desconto");

}
if (retired = true) {
    console.log("É aposentado e pode ter desconto");
} else {
    console.log("Não é aposentado e não pode ter desconto")
}
console.log("ok")

// 4 - se a pessoa tem olhos verde (greenEyes) ou olhos azuis (blueEyes),
// ela tem olhos claros (lightColorEyes)

let greenEyes = false;
let blueEyes = true;
let lightColorEyes;

if (greenEyes && blueEyes) {
    lightColorEyes = true;
    console.log("Tem olhos claros")
} else {
    console.log("Não tem olhos claros")
}