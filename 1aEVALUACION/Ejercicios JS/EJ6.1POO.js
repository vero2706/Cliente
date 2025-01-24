/* Crea una función que: 
o Pida al usuario que introduzca notas separadas por comas. 
o Calcule la nota media de dichas notas y la muestre por consola. 
o Seguidamente mostrará de nuevo por consola la media pero con 1 solo 
decimal*/

function calcularNotaMedia() {
  
    // prompt() para Pedir al usuario que introduzca notas separadas por comas
    let input = prompt("Introduce las notas separadas por comas (ej: 7.5, 8, 6.2):");
    
    // Convertir la cadena de texto en un array de números
    //split(","): Convierte la cadena de entrada en un array separando los valores por comas.
    //map(Number): Convierte cada elemento del array en un número.
    let notas = input.split(",").map(Number);
  
    // Calcular la suma total de las notas
    //reduce(): Suma todos los valores del array para obtener la suma total.
    let suma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
  
    // Calcular la nota media
    let media = suma / notas.length;
  
    // Mostrar la media sin decimales
    console.log("La nota media es: " + media);
  
    // toFixed(1): Mostrar la media con un solo decimal
    console.log("La nota media con 1 decimal es: " + media.toFixed(1));
  }
  
  // Llamar a la función
  calcularNotaMedia();
  