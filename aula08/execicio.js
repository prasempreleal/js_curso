const  nome = 'Marcelo Leal'
const  idade = 46
const  altura = 1.72
const  peso = 80
let anoNascimento;
let imc;

imc = peso / (altura * altura)
anoNascimento = 2023 - idade
console.log(`${nome}, tem ${idade} anos  pesa ${peso} kilos  tem ${altura}  de altura,  nasceu em ${anoNascimento} e seu  IMC é de ${imc}.`) // essa forma é um template strings, que é muito moderna e amplamente usada.