"use strict";
let numeros = [];
function mostrarrArray(elementos,textoCustom = "") {
  document.write("<h2>Contenido del array" + " " + textoCustom + "</h2>");
  document.write("<ul>");
  elementos.forEach((elemento, index) => {
    document.write("<li>"+elemento+ "</li>");
  });
  document.write("</ul>");
}

for (var i = 0; i < 6; i++) {
  numeros.push(+prompt("ingresa los 6 numeros"));
}
//Mostrar array de numeros ordenado de manera acendente si se desea hacer de manera desendente cambiar a b-a
numeros.sort((a, b) => a - b);
mostrarrArray(numeros,'ordenado');
//Mostrar array de forma inversa
numeros.reverse();
mostrarrArray(numeros,'Invertido');
//Cuantos elementos hay en el mostrarrArray
document.write("<h3>ElArray Tiene "+numeros.length+" Elementos</h3>");

//Busqueda de lo que el usuario escriba

let busqueda = +prompt("Ingresa el texto a buscar");
let posicion = numeros.findIndex(numero => numero == busqueda);
if (posicion && posicion != -1) {
  document.write("<h3>ENCONTRADO</h3>");
  document.write("<h3>El elemento esta en el indice "+ posicion + "</h3>");
}else{
  document.write("<h3>NO ENCONTRADO</h3>");
}
