let num1 = prompt('Digite um número :')
let num2 = prompt('Digite outro número :')
num1 = Number(num1)
num2 = Number(num2)

/*const resultado = num1 + num2, ao invés de usarmos assim, o que pode ser feito sem problema, podemos também colocar diretamente no template string, daí o template que ficaria ${resultado} com a variável const declarada, ficaria assim.*/
alert(`O resultado da sua conta foi : ${num1 + num2}`) /* template strings, lindo, porém, isso só é indicado no caso de códigos mais simples, no caso de códigos mais extensos e complexos com a variável sendo declarada deixa o código mais explicito, a gente demostra claramente o que queremos fazer*/