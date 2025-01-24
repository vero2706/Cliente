/* TOSTRING() JOIN() SPLIT()

EJERCICIO 4: 
➢ Implementa una función que: 
. Pida por pantalla un número indeterminado de valores numéricos al 
usuario separados por el carácter “/”. 
. Meta todos esos valores en un array. 
. Ordene el array de menor a mayor. 
. Muestre por pantalla al usuario una única cadena con todos los valores del 
array, separados por el carácter “–“. */

function gestionarValoresNumericos() {

// Pedir al usuario que introduzca números separados por "/"
    const entrada = prompt("Introduce valores numéricos separados por '/':");

// Convertir la cadena de entrada en un array usando SPLIT()
    const numerosArray = entrada.split("/").map(Number); // Convertir cada elemento a número

// Ordenar el array de menor a mayor
    numerosArray.sort(function(a, b) {
        return a.length - b.length;
    });
    //FUNCION FLECHA: numerosArray.sort((a, b) => a - b);

// Crear una cadena con los valores del array separados por "–"
    const resultado = numerosArray.join("-");

// Mostrar la cadena resultante
    console.log("Valores ordenados:", resultado);
}

// Ejecutar la función
gestionarValoresNumericos();

//!!.map(Number) convierte cada elemento del array en un número.
