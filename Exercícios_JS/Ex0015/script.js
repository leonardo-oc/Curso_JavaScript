function carregar() {

     var msg = window.document.getElementById('msg')
     var img = window.document.getElementById('imagem')
     var data = new Date()
     var hora = data.getHours()

     msg.innerHTML = `Agora são ${hora} horas.`

     if (hora >= 0 && hora <12 ){
          //Bom Dia!
          img.src = 'fotomanha.png'
          document.body.style.background = '#bbe4fd'

     } else if(hora >= 12 && hora < 18){
          //Boa Tarte!
          img.src = 'fototarde.png'
          document.body.style.background = '#feb89e'
     } else {
          //Boa Noite!
          img.src = 'fotonoite.png'
          document.body.style.background = '#382b44'
     }
     


    

}

