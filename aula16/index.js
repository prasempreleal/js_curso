const alunos = ['Marcelo', 'Claudia', 'Nathan']// O ideal é fazer um array organizado, se como exemplo temos um array de nomes, seria correto colocar apenas nomes.Porém o javascript não nos restringe, podemos ter em um array strings, booleans, Numbers etc..
console.log(alunos)
// sabemos que as strings são indexadas por exemplo, ou seja ela tem os índices de cada letra.
//               01234567891011
const meuNome = 'Marcelo Leal'
// Os arrays também são indexados, porém um pouco diferente das strings, pois os arrays não são indexados pelo seu valor, e sim , por elemento, no caso do array acima  o Marcelo tem o índice 0, Claudia o índice 1 e o Nathan o índice 2 e assim por diante dependendo do tamanho do array.
console.log(meuNome[4])//Nesse caso, como já aprendido, vai nos retornar o índice 4 do meuNome, que no caso é, e .
console.log(alunos[0])//No caso do array, quando pedimos para retornar o índice, ele nos retorna Marcelo que é o índice )
alunos[2] = 'Sebastião'// Aqui estamos pedindo para mudar o índice 3 (que no caso é Nathan), para Sebastião.
console.log(alunos)
alunos[3] ='Pablo'//Aqui, como não existia o índice 3, pedimos para incluir  o índice com o valor Pablo.
console.log(alunos)
console.log(alunos.length)// Do mesmo modo como acontece com strings, aqui ele nos retornará o tamanho do array.
//alunos[alunos.length] = 'Fábio'
//alunos[alunos.length] = 'Ricardo'
//alunos[alunos.length] = 'Stephany'//Aqui pedimos para incluir todos esse nomes, que serão colocado no final do array.
alunos.push('Henrique')//Aqui estamos fazendo o mesmo dos de cima, porém de forma mais rápida, prática e moderna.
console.log(alunos)
//Porém se por algum motivo eu quiser colocar no começo do array, substituindo assim o índice 0, temos essa função.
alunos.unshift('Dora')
alunos.pop() //Aqui estamos removendo o ultimo índice do array, ou seja o Henrique vai deixar de existir aqui. Se jogarmos ele em uma variável, podemos ver depois quem foi removido.
const removido = alunos.pop()
// similar ao anterior, porém removendo do primeiro índice temos:
alunos.shift()//Nesse caso removerá o primeiro índice do array (0), que nesse caso é Dora
const removido2 = alunos.shift()//Mostrará quem foi removido.
delete alunos[1]//Aqui estamos pedindo para apagara o índice 2, porém, o que está dentro do índice será removido, más o índice continuará existindo como elemento vazio.
alunos.push('Fábio')
alunos.push('Ricardo')
alunos.push('Henrique')
console.log(alunos.slice(0, 3))//Aqui vamos pegar até o elemento 3, lembrando que começa a contar do 0.
console.log(alunos.slice(0, -2))//Já aqui vamos pegar o array, menos os 2 ultimo índices.
console.log(typeof alunos)//Aqui, embora pareça estranho, ele nos retornará tipo OBJETO,pois, arrays são objetos na verdade, depois entendermos melhor os conceitos.
console.log(alunos instanceof Array)//Aqui é realmente para termos certeza que estamos trabalhando como um array, é como se estivesse perguntando, isso é um array? se sim retornará True, se não , false.