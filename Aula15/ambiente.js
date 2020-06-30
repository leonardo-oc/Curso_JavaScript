let num = [5,8,2]
num[3] = 6
num.push(7) //Acrescenta elemento no final do array.
console.log(num)
console.log(`O vetor tem ${num.length} posições`) //Verificar tamanho do array.
console.log(`O Primeiro valor do vetor é ${num[0]}`)
console.log(num.sort()) //Pegar os elementos e colocar em ordem crescente.
let pos = num.indexOf(5) //Buscar valor dentro do vetor.
if (pos == -1){
  console.log('O valor não foi encontrado!')
} else{

  console.log(`O valor 8 está na posição ${pos}`)

}


