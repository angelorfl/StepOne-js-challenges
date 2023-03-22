// Escreva uma função que converte o nome para iniciais. 
// Por exemplo, se eu passar o nome João e sobrenome Viana, a função deve retornar J.V.

// O retorno deve ser duas letras maiúsculas, seguidas de um ponto.

// Outros exemplos:
// `Maria Silva` => `M.S.`
// `Pedro Pedroso`  => `P.P`

function abbrevName(firstName, lastName){
	const name1 = firstName;
	const name2 = lastName;
	return name1 + name2;
}
let initFistName = abbrevName("joão")
let initLastName = abbrevName("viana")
console.log(initFistName.charAt(0).toUpperCase() + "." + initLastName.charAt(0).toUpperCase());

