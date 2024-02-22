especies = []

function teste(){
tela = document.getElementById('tela');
quantidade = document.getElementById('quantidade').value

if(quantidade == 2930 || quantidade == 2.930){
  tela.innerHTML = 'você acertou!!'
}else{
  document.getElementById('tela').innerHTML = 'você errou, tente novamente.'
}




//tela.innerHTML = '<ol><li>'+especies.join('</li><li>')+'</li></ol>'

}

function testa(){
  tela = document.getElementById('tela');
  quantidade = document.getElementById('quantidade').value
  if    (especies.splice(especies.indexOf(quantidade),1)){
  }else{
    especies.splice(especies.indexOf(quantidade),1)
  }
  
  tela.innerHTML = '<ol><li>'+especies.join('</li><li>')+'</li></ol>'
}

