const numero = Number(prompt('Digite um número:'))/*sabemos que um prompt sempre vai retornar uma String, mesmo se digitarmos um número, para arrumar isso envolvemos o prompt, com um Number, então fazermos aqui tipo uma correte, o que digitamos no prompt vai vir para Number, ele vai fazer seu trabalho e jogar para minha variável.
*/

const numeroTitulo = document.getElementById('numero-titulo')/*Nesse momento estamos falando pra o documento , pegue esse id, que no caso é ('numero-titulo'), então fala para o javascript, salva isso ai nessa variável, que no caso é const numeroTitulo.
*/
const texto = document.getElementById('texto') // Claro, o mesmo do de cima porém usando o id texto, que está em uma tag div.
numeroTitulo.innerHTML = numero // nesse caso alteramos o HTML interno da tag span
texto.innerHTML = ' '
texto.innerHTML += `<p>A Raiz quadrada: ${numero ** 0.5}.</p>`
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`
texto.innerHTML += `<p>É NAN: ${Number.isNaN(numero)}.</p>`
texto.innerHTML += `Arredondado para baixo : ${Math.floor(numero)}</p>`
texto.innerHTML += `<p>Arredondado para cima : ${Math.ceil(numero)}</p>`
texto.innerHTML += `<p> Com duas casas decimais : ${numero.toFixed(2)}</p>`
// Não se esquecer que para adicionarmos isso que fizemos como uma sequência, de colocar += .