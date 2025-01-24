//Recupera el elemento con id “apellido1”. 
document.getElementById("apellido1");
//Recupera todos los párrafos de una vez. 
document.getElementsByTagName("p");
//Recupera, de una sola vez, todos los párrafos del div con id “seccionTercera”.  
document.querySelectorAll("#sectionTercera p");
//Recupera todos los elementos de tipo input. 
document.getElementsByTagName("input");
//Recupera los elementos de tipo input con nombre “sexo”.  
document.getElementsByName("sexo");
document.querySelector("[sexo] input")
//Recupera los elementos de la lista de la clase “par”.  
document.getElementsByClassName("par");

//********************************************************************************* */

//EJERCICIO 2:

//➢ Recupera el primer párrafo que hay dentro del div “seccionPrimera”. 
let elemento = document.getElementById("sectionPrimera");

/*console.log(*/ elemento.firstElementChild; //Primer hijo <p>
elemento.firstChild; //primer hijo SEA LO QUE SEA (Salto de linea, comentario...)

//➢ Recupera el tercer párrafo del div anterior.
let elementoS = document.getElementById("sectionPrimera");
/*console.log(*/ elemento.lastChild; //Aquí sabemos que el el ultimo, pero si fueran más parrafos no podríamos usar este get
/*console.log(*/elemento.getElementsByTagName("p")[2];

//➢ El último elemento de la lista. 
let elementoLista = document.getElementsByTagName("ul")[0];
console.log(elementoLista.lastElementChild);

/*let elementoLista = document.getElementsByTagName("li");
console.log(elementoLista[elementoLista.length -1]);*/

//➢ La label del input nombre.  
console.log(document.getElementsByTagName("label")[0]);

let element = document.querySelector('label[for="nombre"]');

//********************************************************************************************** */

//EJERCICIO 3 

//➢ Continuando con el ejercicio2: 

// Recupera el innerHTML del elemento ul y su textContent. 
let elementUL = document.getElementsByTagName("ul")[0]; //(Cris)
console.log(elementUl.innerHTML);
console.log(elementUL.textContent);

/*let elementUL = document.querySelector('ul');
let ulInnerHTML = elementUL.innerHTML
console.log(ulInnerHTML);
let ulTextContent = elementUL.textContent;
console.log(ulTextContent);*/


// Compara los resultados de las dos recuperaciones del punto anterior.

innerHTML incluye todas las etiquetas HTML dentro de ul, 
mientras que textContent solo incluye el texto.


// Recupera el valor del primer input radio de sexo.
/*Seleccionamos el 1º input radio de sexo*/ 
let elementInput = document.querySelector('input[type="radio"][name="sexo"]');
/*Recuperamos y mostramos el valor*/
console.log(elementInput.value);

// Busca como recuperar el valor del sexo que está seleccionado. 
let valorSeleccionado = document.querySelector('input[type:"radio"][name="sexo"]:checked');
/*CHECKED indica que está seleccionado
// Muestra el valor del sexo seleccionado (si existe)
if (selectedSexoRadio) {
  console.log("Sexo seleccionado:", selectedSexoRadio.value);
} else {
  console.log("No hay ningún sexo seleccionado.");
}*/


/*➢ PROGRAMAR LA FUNCIONALIDAD de los botones ACEPTAR y CANCELAR: 
Crea el archivo trabajarConDom.js y programa la siguiente funcionalidad:*/ 

// Al pulsar el botón Aceptar, se dará el foco a la caja del nombre.

function focoNombre(){
    document.getElementById("nombre")

}

//Al pulsar el botón Cancelar, el foco se quitará de la caja del nombre. */
