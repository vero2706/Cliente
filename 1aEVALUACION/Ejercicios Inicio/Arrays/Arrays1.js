/* MATCH() PUSH() UNSHIFT() LENGTH POP() SHIFT()

Implementa una función donde:  
. Primero se creará un array vacío. 
. Después se pedirá al usuario, repetidamente, que introduzca un número 
(que podrá ser positivo, negativo o 0) y un nombre de persona. 
. Cada vez se preguntará al usuario si se va a añadir el valor indicado: 
▪ Si acepta que se añada: 
• Si ha introducido un número mayor o igual que 0 se 
incluye el nombre en el array en la posición indicada. 
• Si el número es negativo, se añadirá al final del array sin 
sobrescribir ninguno. 
▪ Si no lo acepta: 
• Si el número es mayor o igual que 0, se eliminará el valor 
del elemento que se encuentre en la posición indicada 
ignorando el introducido. 
• Si es negativo, se eliminará el primero. 
. La ejecución terminará cuando, en lugar de un número, se introduzca una 
cadena. 
.Antes de finalizar se mostrará el contenido final del array por 
consola. */ 

function CrearArrayNombres() {

// Crear un array vacío
    let arrayNombres = [];

    while (true) {
    // Pedir al usuario que introduzca un número
        const entradaNumero = prompt("Introduce un número (o una palabra para terminar):");
        
    // Si la entrada no es un número, romper el bucle
        if (isNaN(entradaNumero)) {
            break;
        }


        const numero = parseInt(entradaNumero); // Convertir la entrada a un número
        const nombre = prompt("Introduce un nombre:");

    // Preguntar al usuario si desea añadir el valor
        const agregar = confirm(`¿Deseas añadirlo?`);

        if (agregar) {
            if (numero >= 0) {
                // Añadir el nombre en la posición indicada
                arrayNombres[numero] = nombre; // Asignar en la posición indicada
            } else {
                // Añadir el nombre al final del array
                arrayNombres.push(nombre);
            }
        }

        if (!agregar) {
            if (numero >= 0) {
                // Eliminar el valor en la posición indicada
                delete arrayNombres[numero]; // Borrar el elemento en la posición
            } else {
                // Eliminar el primer elemento
                arrayNombres.shift(); // Quitar el primer elemento
            }
        }
    }

    // Mostrar el contenido final del array
    console.log("Contenido final del array:", arrayNombres);
}

// Ejecutar la función
CrearArrayNombres();

