// Utilizando o for, faça uma estrutura de repetição que dê o console dos números 50 a 100.

// Utilizando o for, faça uma estrutura de repetição que dê o console somente dos números pares, começando no 2 e indo até 100.

// Utilizando o for, faça uma estrutura de repetição que dê o console dos números 100 a 1.

console.log("Repetição FOR de 50 a 100");
for (let i=50; i <= 100; i++) {
    console.log(i);
}

console.log("Repetição for de pares 2 a 100");

for (let n = 2; n <= 100; n++){
    let resto = n%2;
    if (resto == 0){
        console.log(n);
    }   
}

console.log("Repetição for de 100 a 1")

for (let number = 100; number >= 1; number--){
    console.log(number);
}