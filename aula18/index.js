 /*const pessoa1 = {
    nome: 'Marcelo', 
    sobrenome: 'Leal',
    idade: 46
 }*/
 //Dessa forma podemos atribuir valores para pessoa1, e desse jeito fazemos pessoa2 e etc...
  
 function criaPessoa(nome, sobrenome, idade){
    return{
        nome, sobrenome, idade}
    }
   
 const pessoa = criaPessoa('Marcelo', 'leal', 46) // Nesse caso estamos pegando os parâmetros da nossa functions, e usando como argumento dentro da nossa variável.  
 const pessoa1 = criaPessoa('Claudia', 'Leal', 46)
 const pessoa2 = criaPessoa('Fábio', 'José', 37)
 const pessoa3 = criaPessoa('Nathan', 'Rocha', 22)
 console.log(pessoa1.nome, pessoa2.sobrenome, pessoa3.nome)//facilitou bastante nossa vida desse jeito.

 const cidadão = {
    nome: 'Gabriel',
    sobrenome: 'Marcos',
    idade: 16,

    fala(){
        console.log(`A minha idade atual é ${this.idade}. `)
    },
    incremento(){
        this.idade++ 
    }
 }
 cidadão.fala()
 cidadão.incremento()
 cidadão.fala()
 cidadão.incremento()