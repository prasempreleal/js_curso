/*Aritméticos 
* + Adição / concatenação
* - subtração 
* / divisão 
* * multiplicação
* ** potenciação
* % resto da divisão
*/
/* 
precedência :
 1º ()
 2º **
 3º * / % 
 4º + -  
*/
 const num1 = 5 
 const num2 = 10 
 let contador = 1 
 contador++ // aqui estamos atribuindo um valor a variável contador, no caso aqui é o valor dela mais um.
 contador++ // mais um
 contador++ // mais um
/* Esse incremento pode vir tando pos fixado quanto pré, ++contador ou contador++, a diferença que se é colocado antes ele primeiro faz a conta depois retorna o valor, já o pos ele primeiro executa a ação pedida pra depois fazer o incremento do valor. Claro que da mesma forma também temos o seu decremento, que obviamente no caso é --, sendo assim ficaria --contador ou contador--*/
// Incremento = ++
// Decremento = -- 
/* 
Quando por algum motivo precisarmos incrementar mais de um no valor, podemos fazer assim por exemplo : contador = contador += 2 */

let passo = 2
passo += 2 // posso fazer com qualquer operador matemático
passo += 2 // são chamados de operadores de atribuição
passo += 2
console.log(passo)


