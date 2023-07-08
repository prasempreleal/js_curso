/* 
Entre  0 - 11 - Bom dia 
Entre 12 -17 - boa tarde 
Entre 18 - 23 - boa noite
*/


const hora = 56

if (hora >= 0 && hora <= 11){
    console.log('Bom dia!')
} else if (hora >= 12 && hora <=17){
   console.log('Boa tarde!') 
} else if( hora >= 18 && hora <= 23){
    console.log('Boa noite!')
} else {
    console.log('Se fodeu!')
}

// conclusões: 
// if pode ser usado sozinho
// sempre que utilizo a palavra else, preciso de um if antes
// posso ter vários else ifs na checagem
// só posso ter um else na checagem
// podemos usar condições sem else if, utilizando apenas if e else

const tenhoGrana = false 

if (tenhoGrana){
    console.log('Vou dar um role')
} else {
    console.log('Me lasquei!')
}