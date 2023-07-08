const nome = 'Marcelo'
console.log(nome)
/* Diferentemente da Let, uma constante (const) não pode-mos inicializar ela sem declara la. Ex: const nome; isso está errado, o que na variável let seria normal. Também não podemos mudar o valor da const, Ex: const nome = 'João', sem em algum lugar do condigo mudar para EX: nome = 'Marcelo' está errado, pois foi mudado o valor de const, o que em let é perfeitamente aceito.
*/
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero + segundoNumero;
const conta = primeiroNumero * segundoNumero
const resultadoDuplicado = resultado * 10 
console.log(resultado)
console.log(conta)
console.log(resultadoDuplicado)
console.log(typeof primeiroNumero)