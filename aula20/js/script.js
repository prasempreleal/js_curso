function meuEscopo () {
const form = document.querySelector('.form')// Quando selecionamos pela classe sempre usamos o . antes da classe.


// form.onsubmit = function (evento){
//  evento.preventDefault();// isso é para prevenir um evento normal do comportamento do navegador, más que não queremos que aconteça, que nesse caso está atualizando o navegador toda vez que enviamos o formulário.
//  alert(1)
//  console.log('Foi enviado.')

// };
const resultado = document.querySelector('.resultado')

const pessoas = []
    function recebeEventoForm (evento){
        evento.preventDefault();
        
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');


        pessoas.push({
            nome: nome.value, 
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,    
                        
        });
        console.log(pessoas)
        
        resultado.innerHtml += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
    }
    


    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo()