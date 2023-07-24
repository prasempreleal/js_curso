const nome = 'Marcelo' //string
const nome1 = "Leal" // string 
const nome2 = `Cláudia` // string
const num1 = 10 // number
const num2 = 10.53 // number 
let nomeAluno; // undefined, quando declaramos uma variável sem colocar um valor nela.
let sobrenomeAluno = null; /* igual ao anterior ele não aponta para lugar nenhum da memória, porém esse usamos quando em algum lugar do código queremos, por algum motivo, desconfigurar uma variável, ou seja, colocar o valor de uma variável como nulo. Um exemplo bem simples é quando em um site o usuário possa selecionar uma cor, porém ele não o faz, sendo assim esse valor ficou com sendo nulo. Terminando a explicação, o null, nós é que usamos ela no código para anular o valor de alguma variável, já no caso de undefined é o motor do javascript quem usa essa variável para indicar um valor ainda não setado, então nós não usamos o undefined, isso é exclusivo do javascript.*/
const aprovado = true 
const reprovado = false // boolean = true, false (lógico)
console.log(typeof aprovado)
/* logo os tipos primitivos são : string, number, undefine, null, boolean e symbol (esse será mostrado mais a frente no curso pois ele é um pouco mais avançado)  */