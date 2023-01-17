
function animar(){
  var btn = document.getElementById("btn-menu")
  btn.classList.toggle('ativar')
  
  if(menu.style.display == "block"){
    menu.style.display = "none";
  }else{
    menu.style.display = "block"
  }
}

function darkMode(){
  var mode = document.body;
  mode.classList.toggle('dark-light');
  
  var darkMenu = document.getElementById('menu')
  darkMenu.classList.toggle('fundo')
  
  var boll = document.getElementById('botao-boll')
  boll.classList.toggle('direcao-botao')
}

function typeWrite(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = ' ';
  textoArray.forEach(function(letra, i) {

     setTimeout(function() {
      elemento.innerHTML += letra;
    }, 150 * i)

  });
}

const titulo = document.querySelector('.titulo-principal');
typeWrite(titulo);
