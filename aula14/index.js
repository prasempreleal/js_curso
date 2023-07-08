let num1 = 1 // Number
let num2 = 2.5 // Number
/* supondo que não queremos somar más sim concatenar esse valores, já sabemos mudar de de string para Number, más agora que temos dois Numbers e precisamos concatenar, fazemos o contrário.
*/
 console.log(num1.toString() + num2) /* Aqui o valor da variável num1 continuará sendo 1, estamos nesse caso passando ela pra string, temporariamente. Com estamos concatenado e não somando o resultado disso será 12.5, está concatenando o valor de 1 com 2.5 , ou seja se qualquer um dos valores forem uma String o sinal de + concatena e não soma, então mesmo não tendo mudado o num2 ainda assim, ele vai concatenar
  */
 //num1 = num1.toString() Já aqui e caso nós queiramos mudar a variável num1 para uma string definitivamente.
console.log(num1.toString(2)) // Quando fazemos isso estamos pedindo um representação Binária do valor de num1
let numTest1 = 10.5789551255547
console.log(numTest1.toFixed(2))// Aqui estamos pedindo para a variável numTest1 ficar mais simplificada para melhorar o entendimento.
let numTest2 = 10
console.log(Number.isInteger (numTest2))/* Aqui supondo que recebemos o valor dessa variável de um banco de dados ou uma conta ou algo do tipo, e precisamos definir seu valor correto, fazemos essa função para ele retornar true (verdadeiro) ou False (falso) para sabermos se é ou não um número inteiro. Se fosse por exemplo 10.25 retornaria false pois aí já não se trata de um número inteiro.
*/
let temp = num1 * 'olá'
console.log(Number.isNaN(temp))/* Aqui, embora pareça estranho, estamos pedindo para o Javascript nos informar se a conta é um NAN (not a Number), com já sabemos que essa conta é impossível de ser executada, ele vai retornar um true, ou seja, afirmando que sim , essa conta é um NAN.
*/
let numTest3 = 0.7
let numTest4 = 0.1
numTest3+= numTest4
numTest3+= numTest4
numTest3+= numTest4
numTest3 = Number(numTest3.toFixed(2))
console.log(numTest3 + numTest4)