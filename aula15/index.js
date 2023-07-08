let num1 = 9.54578
let num2 = Math.floor(num1) // Fazendo assim vamos ver com o objeto Math usando o método floor , o número arredondar para baixo.
let num3 = Math.ceil(num1)// Equivalente ao anterior, porém arredoando para cima.
// Método, nada mais é do que uma função dentro de um objeto.
let num4 = Math.round(num1)// Aqui também vai arredondar, ou para cima ou para baixo, o que estiver mais proximo.
console.log(num2)
console.log(num3)
console.log(num4)
console.log(Math.max(1,3,7,10,-500,-400,1555,8493))// Quando usamos esse método, ele nos retornará o maior número de um sequência.
console.log(Math.min(1,3,7,10,-500,-400,1555,8493))// Já aqui retornará o menor número da sequência.
console.log(Math.random())// Aqui vai gerar um número aleatório entre 0 e 1, porém o 1 não será mostrado.Podemos fazer algo tipo :
const aleatório = Math.random() * (10 - 5) + 5//Aqui esse número aleatório vai ficar entre 10 e 5. 
console.log(aleatório)// se quisermos arredondar o número aleatório podemos fazer tipo :
const aleatório2 = Math.round(Math.random() * (10 -5) + 5)
console.log(aleatório2)
console.log(Math.PI)// Vai nos passar o valor de PI, simples assim.
console.log(Math.pow(2, 12))// Aqui ele vai simplesmente fazer 2 elevado a 12. 
console.log(2 ** 12) // Assim já aprendemos anteriormente e é muito mais fácil. 
let raiz = 25
console.log(raiz ** 0.5)// Raiz quadrada, simples também.   