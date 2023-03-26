// Utilizando o while, faça uma estrutura de repetição que dê o console dos números 50 a 100.

// Utilizando o while, faça uma estrutura de repetição que dê o console somente dos números pares, começando no 2 e indo até 100.

// Utilizando o while, faça uma estrutura de repetição que dê o console dos números 100 a 1.

console.log("Repetição while de 50 a 100") //repetição de  50 a 100
let i = 50;

while (i<=100){
    console.log(i);
    i++;
}    

console.log("while  Somente pares de 2 a 100") // repetição de 2 a 100 - somente pares

let n = 1;

while (n <= 100){
    let resto = n%2;
    if (resto == 0){
        console.log(n);
    }
    n++;
}

console.log("Repetição while de 100 a 1") // repetição inversa, de 100 a 1

let number = 100;

while (number >= 1){
    console.log(number);
    number--;
    if (number == 101){
        break;
    }
}