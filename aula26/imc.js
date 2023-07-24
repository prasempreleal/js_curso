//Capturar evento de submit do formulário
const form = document.querySelector('#formulario')

form.addEventListener('submit', function(e){
    e.preventDefault()
    const inputPeso = e.target.querySelector('#peso') 
    const inputAltura = e.target.querySelector('#altura') 
    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)});

    if (!peso){
        setResultado('Peso inválido', false)
        return;
    }
        // Aqui sempre que o peso for inválido ele retornará falso e vai parar, por isso se usa return.

    if (!altura){
      setResultado('Altura inválida', false) 
      return; 
    }
    console.log('Cheguei aqui...');


function criaP(){
    const p = document.createElement('p')
    return p;
   
}

function setResultado (msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();
    p.innerHTML = msg;
    resultado.appendChild(p);
}




