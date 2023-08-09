// operadores ternários =  ? : 

const pontuacaoUsuario = 2000;

/*if (pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP');
} else{
    console.log('Usuário normal')
}*/

// Para deixarmos nosso código mais enxuto podemos usar operadores ternários.
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal'
console.log(nivelUsuario);

//Fizemos aqui exatamente a mesma coisa do que usando if e else, porém de forma mais enxuta.

// Funciona assim : condição ? (valor para verdadeiro)   : (Valor para falso)