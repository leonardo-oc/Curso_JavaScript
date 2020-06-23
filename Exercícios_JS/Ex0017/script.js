function contar(){
  let ini = document.getElementById('txti')
  let fim = document.getElementById('txtf')
  let passo = document.getElementById('txtp')
  let resultado = document.getElementById('resultado')

  if(ini.value.length == 0 ||fim.value.length == 0 || passo.value.length ==0){

    window.alert('[ERRO] Fatam dados!')


  }else{

    resultado.innerHTML = 'contando'
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if (i < f) {
      //Contagem crescente!
      for(let c = i; c <= f; c += p){

        resultado.innerHTML +=  ` ${c} \u{1f449}`
      }
  
    } else{

      //Contagem regresiva!
      for(let c = i; c >= f; c -= p){       
        resultado.innerHTML += `${c} \u{1f449}`
      }
      
    }
    resultado.innerHTML += `\u{1f3c1}`
  
  }

}