//cajas de texto
var input = document.querySelector("#entrada");
var output = document.querySelector("#salida");

//botones
var encriptar = document.querySelector("#encriptar");
var desencriptar = document.querySelector("#desencriptar");
var copiar = document.querySelector(".botonCopiar");

var texto;
var tmp = "";

//colocar acciones a los botones al hacer click
encriptar.onclick = encriptarTexto;
desencriptar.onclick = desencriptarTexto;
copiar.onclick = copiarTexto;

function encriptarTexto(){
  //preparar las variables y limpiar salida
  texto = input.value;
  tmp = "";
  output.value = "";

  //validar que el texto no tenga mayusculas ni acentos
  if(!validacionSinAcentosMayusculas()){
    return;
  }

  cambiarLetrasEncriptacion();

  mostrarSalida(tmp);
}

function desencriptarTexto(){
  texto = input.value;
  tmp = texto;

  cambiarLetrasDesencriptacion();
  //console.log("Desencriptado: " + tmp);
  mostrarSalida(tmp);
}

function cambiarLetrasEncriptacion(){
  for(var i = 0; i < texto.length;i++){
    if(texto.charAt(i) == 'a'){
      tmp = tmp.concat("ai");
    }else if(texto.charAt(i) == 'e'){
      tmp = tmp.concat("enter");
    }else if(texto.charAt(i) == 'i'){
      tmp = tmp.concat("imes");
    }else if(texto.charAt(i) == 'o'){
      tmp = tmp.concat("ober");
    }else if(texto.charAt(i) == 'u'){
      tmp = tmp.concat("ufat");
    }else{
      tmp = tmp.concat(texto.charAt(i));
    }
  }
}

function cambiarLetrasDesencriptacion(){
  tmp = tmp.replace(/ai/gi,"a");
  tmp = tmp.replace(/enter/gi,"e");
  tmp = tmp.replace(/imes/gi,"i");
  tmp = tmp.replace(/ober/gi,"o");
  tmp = tmp.replace(/ufat/gi,"u");
}

function mostrarSalida(textoSalida){
  output.value = textoSalida;
}

function copiarTexto(){
  output.select();
  document.execCommand("cut");
  input.value = "";
  input.focus();
  alert("Copiado");
}

function validacionSinAcentosMayusculas(){
  for(var i = 0; i < texto.length; i++){
    if(texto.charAt(i) != " " && texto.charAt(i) == texto.charAt(i).toUpperCase()){
      input.focus();
      alert("No puedes ingresar letras mayusculas\nLetra \""+texto.charAt(i)+"\"");
      return false;
    }else if(
      texto.charAt(i) == "á" ||
      texto.charAt(i) == "é" ||
      texto.charAt(i) == "í" ||
      texto.charAt(i) == "ó" ||
      texto.charAt(i) == "ú"){
      alert("No puedes ingresar letras con acentos\nLetra \""+texto.charAt(i)+"\"");
      input.focus();
      return false;
    }
  }
  return true;
}
