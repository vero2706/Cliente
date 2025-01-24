/* SLICE() SPLICE() 

EJERCICIO 2:  
➢ Prueba, en la consola del navegador, los ejemplos anteriores de las funciones slice y splice.  
➢ Implementa una función que incluya en un array la siguiente lista: tela, bies, hilo, tijeras, 
máquina de coser, botón. Después, utilizando las funciones vistas:  
o Elimina el bies. Muestra el array por consola.  
o Añade, entre hilo y tijeras, hilo torzal. Muéstralo de nuevo por consola.  
o Quita tijeras y sustitúyelas por cúter rotatorio y mesa de corte. Una vez mas, muestra 
el array por consola.  
o Crea, a partir del primer array, dos nuevos donde el primero incluya los tres primeros 
elementos del original y el segundo del cuarto al sexto.  
o En el segundo de los nuevos arrays creados:  
▪ Incluye, en la primera posición, remalladora.  
▪ Incluye, en la penúltima posición, cinta métrica.  
o Muestra por consola el contenido de los tres arrays.   */

function gestionarHerramientas() {
    
// Crear un array inicial con los elementos indicados
    let herramientas = ["tela", "bies", "hilo", "tijeras", "máquina de coser", "botón"];


// 1. Eliminar el "bies"
    herramientas.splice(1, 1); // Elimina "bies"
    console.log("Después de eliminar bies:", herramientas); // Mostrar el array


// 2. Añadir "hilo torzal" entre "hilo" y "tijeras"
    herramientas.splice(2, 0, "hilo torzal"); // Inserta "hilo torzal" en la posición 2
    console.log("Después de añadir hilo torzal:", herramientas); // Mostrar el array


// 3. Quitar "tijeras" y sustituirlas por "cúter rotatorio" y "mesa de corte"
    herramientas.splice(3, 1, "cúter rotatorio", "mesa de corte"); // Sustituye "tijeras"
    console.log("Después de sustituir tijeras:", herramientas); // Mostrar el array


// 4. Crear dos nuevos arrays
    let herramientasPrimero = herramientas.slice(0, 3); // Incluye los tres primeros elementos
    let herramientasSegundo = herramientas.slice(3, 6); // Incluye del cuarto al sexto


// 5.1 Modificar el segundo array 
    herramientasSegundo.splice(0, 0, "remachadora"); // Incluye "remachadora" en la primera posición
    herramientasSegundo.splice(-1, 0, "cinta métrica"); // Incluye "cinta métrica" en la penúltima posición

// 5.2(Ejercicio3)

// 6. Mostrar los tres arrays por consola
    console.log("Primer array:", herramientasPrimero);
    console.log("Segundo array:", herramientasSegundo);
    console.log("Array original modificado:", herramientas);
}

// Ejecutar la función
gestionarHerramientas();
