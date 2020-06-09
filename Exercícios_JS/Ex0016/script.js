function verificar() {

  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  if(fano.value.length == 0 || Number(fano.value) > ano){
      window.alert('[ERRO] Verifique os dados e tente novamente!')
  }else{
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      var gênero = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')
      if(fsex[0].checked){

        gênero = 'Homem'
        if(idade >=0 && idade <10){
          img.setAttribute('src', 'img/homem-bebê.png')
        
        }else if ( idade <21){
          img.setAttribute('src', 'img/homem-jovem.png')


        } else if (idade < 50){
          img.setAttribute('src', 'img/homem-adulto.png')


        }else{

          img.setAttribute('src', 'img/homem-idoso.png')


        }


      }else if(fsex[1].checked){
        gênero = 'Mulher'

        if(idade >=0 && idade <10){
          img.setAttribute('src', 'img/mulher-bebê.png')
        }else if ( idade <21){
          img.setAttribute('src', 'img/mulher-jovem.png')


        } else if (idade < 50){
          img.setAttribute('src', 'img/mulher-Adulta.png')


        }else{

          img.setAttribute('src', 'img/mulher-idosa.png')


        }
      }
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
      res.appendChild(img)
  }
}