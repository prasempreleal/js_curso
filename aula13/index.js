// cada caractere de um string tem um índice que começa com 0123456.... e assim por diante

let umaString = 'Um texto'
console.log( umaString[4])/*nesse momento nós estamos pedindo para ela informar o índice 4 que nesse caso é o e.
Caso a gente peça um valor que não existe na string ele nos retornará Undefined, ex : console.log(umaString [8])nesse caso a string só tem 7 caracteres, logo nos retornará undefined.
*/
console.log(umaString.charAt(6))/*Igualmente a primeiro essa função também nos retornará o índice pedido, porém se pedirmos algo fora do tamanho da string não aparecerá nenhum erro, apenas não aparecerá nada, ex: console.log(umaString.charAt(8)).
*/
console.log(umaString.concat(' ', 'em', ' ', 'um',))/*nesse caso faz uma concatenação, o mesmo efeito do + , porém, obviamente é muito melhor a template string.
*/
console.log(`${umaString} em um lindo dia`)// template string sua linda, muito mais moderno e bonito de se fazer.
console.log(umaString.indexOf('texto'))// Aqui ele mostra em qual índice começa a palavra texto, que nesse caso é o 3.
console.log(umaString.indexOf('o', 3 ))// aqui é o mesmo do de cima porém pedindo para achar o índice  depois do índice 3, no caso 7.
console.log(umaString.lastIndexOf('m', 3))// semelhante ao de cima, porém dessa vez vai buscar o índice de trás para frente, nesse caso é o 1.
console.log(umaString.replace('Um', 'Outro'))// Quando usamos replace, estamos pedindo pra modificar um palavra por outra, aqui trocaremos o Um por OUtro.
let outraString = 'O rato roeu a roupa do rei de Roma.'
console.log(outraString.replace(/r/g, '#'))// Aqui usamos uma expressão regular, e pedimos para trocar todos o r por #. Acho que estudaremos expressões regulares depois.
console.log(outraString.length)// Com length, estamos pedindo o tamanho da string, esse caso 35 caracteres.
console.log(outraString.slice(2, 6))/* Usando slice, pedimos para ele mostrar a palavra entre o caractere 2 ou 6 que nesse caso é rato. Também podemos colocar um valor negativo exemplo :  console.log(outraString.slice(-3)) nesse caso ele está descontando no valor total da string, que nesse caso tem 35 caracteres, descontando o -3 ele vai buscar o caractere 32 que e ir até o final que vai sobrar é o ma. Olhar exemplo abaixo.
*/
console.log(outraString.slice(-3))
console.log(outraString.slice(-5))//nesse outro exemplo, descontando o -5 vamos ter a palavra Roma.
console.log(outraString.slice(-5, -1))// Nesse ele vai fazer basicamente o mesmo do exemplo à cima, porém descontando -1 caractere, que nesse caso é o . então fica só Roma, sem o ponto final.
console.log(outraString.substring(outraString.length -5))//aqui faremos a mesma coisa da anterior.Melhor usar Slice, que faz a mesma coisa escrevendo memos código.
console.log(outraString.split(' '))/* Aqui estamos dividindo e separando os caracteres em um array, que não estudamos ainda, e nesse caso estamos dividindo em  espaço.
*/
console.log(outraString.split('r'))// Mesmo do de cima, porém dividindo os r , então veremos a string sem os rs.
console.log(outraString.toUpperCase())// vai transformar a string toda em maiúscula.
console.log(outraString.toLowerCase())// ao contrario da anterior transforma a string toda em minuscula. 