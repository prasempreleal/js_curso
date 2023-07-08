const numero = 200
// se isso ocorrer (if), faça isso {o que estiver aqui dentro}
// senão (else), faça isso {o que estiver aqui dentro}

if(numero >= 0 && numero <= 5){
    console.log('Ai está')
} else if (numero >= 6 && numero <= 8){
    console.log('O número está entre 6 e 8.')
} else if (numero >= 9 && numero <= 11){
    console.log('O número está entre 9 e 11')
} else {
    console.log('Nada consta!')
}
// O else final, só será executado se nada anteriormente for executado.

/*
O if e o else if, vão chegar todas as condições e quando ele encontrar a primeira condição verdadeira ele vai executar e parar, porém se tivermos mais condições verdadeiras no código ele não executará. Para checar alguma coisa independente do das condições que está em bloco, fazemos um if separado.
*/