//Capturar evento de submit do formulário
const form = document.querySelector('#formulario')

form.addEventListener('submit', function(e){
    e.preventDefault()
    const inputPeso = e.target.querySelector('#peso') 
    const inputAltura = e.target.querySelector('#altura') 
    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)
    if (!peso){
        setResultado('Peso inválido', false)
        return;
    }
        // Aqui sempre que o peso for inválido ele retornará falso e vai parar, por isso se usa return.

    if (!altura){
      setResultado('Altura inválida', false) 
      return; 
    }
    const imc = getImc(peso,altura)
    const calculoImc = getCalculoImc(imc)

    const msg =  `Seu IMC é ${imc} (${calculoImc}).`;

    setResultado(msg, true)

});

function getCalculoImc(imc){
   const calculo = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'] 

   if (imc>= 39.9) {
    return calculo[5]
   }

   if(imc>= 34.9){
    return calculo[4]
   }

   if (imc >= 29.9){
    return calculo[3]
   }

   if(imc>=24.9){
    return calculo[2]
   }

   if(imc>= 18.5){
    return[1]
   }

   if(imc< 18.5){
    return[0]
   }
}

function getImc (peso,altura){
    const imc = peso / altura **2
    return imc.toFixed(2)
}

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




