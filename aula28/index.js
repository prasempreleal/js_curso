//const data =  new Date();
//console.log(data.toString());

// Data 0 é de 01/01/1970 Timestamp unix ou época unix

const data = new Date('2023-04-15 21:21:59')
console.log('Dia', data.getDate())//assim ele vai pegar o dia
console.log('Mês', data.getMonth())//assim ele vai pegar o mês
console.log('Ano', data.getFullYear())//assim ele vai pegar o ano
console.log('Hora', data.getHours())//assim ele vai pegar a hora 
console.log('Min', data.getMinutes())//assim ele vai pegar os minutos
console.log('Seg', data.getSeconds())//assim ele vai pegar os segundos
console.log('ms', data.getMilliseconds())//assim ele vai pegar os milissegundos 
console.log('Dia semana', data.getDay())//assim ele vai pegar o número do dia da semana



console.log(data.toString())