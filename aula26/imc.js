let peso;
let altura;
const IMC = peso/(altura*altura)

if (IMC <= 18.5 ){
    console.log('Abaixo do peso!')
} else if (IMC >= 18.5 && IMC <= 24.9){
    console.log('Peso Normal!')
} else if (IMC >= 25 && IMC <= 29.9){
    console.log('Sobrepeso!')
} else if (IMC >= 30 && IMC <= 34.9){
    console.log('Obesidade grau 1!')
} else if (IMC >= 35 && IMC <= 39.9){
    console.log('Obesidade grau 2!')
    } else if (IMC > 40){
        console.log('Obesidade grau 3!')
    } else {
        console.log('Nada consta!')
    }