/* FOREACH() INCLUDES() ARRAY.FROM()
EJERCICIO 8:

Crea una página web que permita probar el ejemplo de Array.from. 
Incluirá: 
. 3 secciones con su atributo class= "titularNoticia". Estas secciones 
contendrán una cabecera de una noticia cada una.

. 2 secciones con otro valor en su atributo class. El contenido será un texto 
cualquiera. 

. Un botón que, al ser pulsado, desencadenará la ejecución de una función. 
 
. Esta función mostrará un alert para cada elemento con 
class="titularNoticia" con el texto que contenga, salvo que dicho texto 
incluya la cadena "tr" en alguna posición. */


function buscarTr() {
  let parrafos = document.getElementsByClassName("titularNoticia");
  //console.log(parrafos);

  let parrafosArray = Array.from(parrafos);
  //console.log(parrafosArray);

  //parrafosArray.forEach(elemento =>{
    //alert(elemento.textContent);

  parrafosArray.forEach((elemento) => {
    let dato = elemento.textContent;
    if (!dato.includes("tr")) {
      alert(elemento.textContent);
    }
  });
}

function cambiarColor() {
  console.log(elemento);
}

//EL HTML ESTÁ EN OTRA CARPETA!!
