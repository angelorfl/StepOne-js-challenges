// 1- Crie um objeto chamado user com as seguintes propriedades:

// - username
// - email
// - age

// E com os seguintes métodos (ações):

// - login: com o console.log("Efetuou o login");
// - logout: com o console.log("Efetuou o logout");

// 2- Mostre uma propriedade! Agora dê um console.log apenas da propriedade age

// 3-  Adicione uma nova propriedade! Adicione uma nova propriedade chamada phone e depois dê um console.log(user); para ver se a propriedade realmente foi adicionada.

// 4- Faça um update de um valor! Troque o valor do username para outro valor e depois dê um console.log(user); para ver se a propriedade realmente foi substituída.

// 5- Remova um valor! Remova o valor age e depois dê um *console.log(user);* para ver se a propriedade realmente foi deletada.


console.log ('Olá Mundo!');

let user = {
    username: "Rafael Angelo",
    email: "mail@mail.com",
    age: "34 yers",
};

//login logout
console.log("Informação de login logout")
console.log (user.username + " Efetuou o Login");
console.log (user.username + " Efetuou o Logout");

// Prioridade Age
console.log("Priorodade para mostar Age")
console.log(user.age);

//Teste nova propriedade Phone
console.log("Adicionar propriedade Phone")
user.phone = "0000-0000"
console.log(user);

//Update de valor username
console.log("Update de valor, alterar username")
user.username = "Angelo Rafael"
console.log(user.username);

//Remover valor age
console.log("Deletar valor Age")
delete user.age
console.log (user);