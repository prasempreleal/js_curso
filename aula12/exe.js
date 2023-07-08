let varA = 'A'
let varB = 'B'
let varC = 'C'

const outroValor = varA
varA = varB
varB = varC
varC = outroValor
// Outra forma mais moderna de se fazer isso é : [varA, varB, varC] = [B, C, A], veremos com mais detalhe depois.

console.log(varA,varB,varC)