// 1- Crie um array vazio chamado animals

// 2- Adicione nesse array dois animais: dog e cat (você pode fazer isso de mais de uma forma diferente!)

// 3- Adicione no começo do array outro animal: spider

// 4- Remova o primeiro elemento do array

// 5- Remova o último elemento do array

// 6- Como ficou o array final?! E qual é o elemento 1 desse array?

console.log("Olá Mundo")

//Criando array vazio
console.log("Arrey vazio")
let animals = [];
console.log(animals);

//adicionando dog e cat no array
console.log("Adicionando dog e cat no array");
animals = ["dog", "cat"];
console.log(animals);

//adicionando no começo do array
console.log("Adicionando Spider no começo do array");
animals.unshift("spider");
console.log(animals);

//remover o primeiro elemento do array
console.log("Removendo primeiro item do array");
animals.shift();
console.log(animals);

//remover ultimo elemento do array
console.log("Remover ultimo item do array");
animals.pop();
console.log(animals);

//resultado do array
console.log("Resultado final do array")
console.log(animals)