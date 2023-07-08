function saudação(nome) {
 return `Bom dia ${nome}!`//Estamos pedindo para função retornar algo.
}
saudação('Tião')/*Sempre que chamamos uma função, devemos usar os parenteses no final do nome da função para o javascript saber que estamos chamando essa função, que no caso aqui é saudação.Tudo que está dentro de uma função está protegido,não conseguimos acessar coisas que estão dentro da função fora dela. Podemos criar parâmetros dentro da função, que funcionam similar como funcionam as  variáveis.
*/
//Aqui podemos usar a função quantas vezes quisermos apenas mudando seu parâmetro.
const arquivo = saudação('Claudia')
console.log(arquivo)
function soma(x, y){
    const resultado = x + y
    return resultado
}
console.log(soma(2, 4))//Agora temos uma função que faz soma.
console.log(soma(3, 10))
console.log(soma(23, 58))
//Como dito anteriormente, o que está dentro da função está protegido, então não podemos chamar o resultado e esperar que nos retorne algo, já que resultado está dentro do escopo da função.
//console.log(resultado)// Isso não rola.
const resultado = soma(2, 2)
console.log(resultado)//Já nesse caso tudo bem, pois o que está dentro da função não será mexido, porém aqui, declaramos uma variável, que não tem haver como o resultado dentro da função.
function maisSoma(x=1, y= 1) {
    const resultado1 = x + y
    return resultado1
}
const resultado1 = soma(3, 5)
console.log(resultado1) // Nesse caso estamos pedindo para a função assumir os valores de x =1 e y = 1, e quando usamos a variável para a soma , os valores foram substituídos por 3 e 5, retornando assim o resultado  8.

//Podemos criar uma função dentro de uma variável, assim estamos criando uma função anônima. Veja abaixo:

const raiz = n => n ** 0.5

console.log(raiz(16))
console.log(raiz(9))
console.log(raiz(25))
//Podemos, ao invés de usar a palavra function usar => , nesse casa estamos criando um arrow function, e se usarmo a arrow function , podemos eliminar o ponto e virgula, que nesse caso seria obrigatório, tirarmos os parênteses e as chaves e, se tivermos apenas 1 parâmetro, podemos tirar também os colchetes e, até mesmo o return, facilita demais.