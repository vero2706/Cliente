/*EJERCICIO 9: 
 
➢  Partiendo de los arrays de notas y precios del ejercicio 7: */

let notas = [7, 8, 5, 6, 9, 4, 3, 10, 2, 1, 6, 5.5, 7, 8, 9];
let precios = [10.5, 22.3, 3.99, 15.0, 2.5, 8.75, 19.99, 5.6, 4.2, 7.8, 12.0, 6.99];


/* Haz copias de los mismos tanto directamente como a través de cualquier 
método de los vistos en apartados anteriores.*/ 

// Copia directa (referencia)
let copiaNotasDirecta = notas;
let copiaPreciosDirecta = precios;

// Copia usando slice (independiente)
let copiaNotasSlice = notas.slice();
let copiaPreciosSlice = precios.slice();


/* Modifica las copias y comprueba los casos en que los arrays son copias 
independientes y los casos en que son referencias al mismo array. */

copiaNotasDirecta[0] = 0;  // Modificamos el primer elemento de la copia directa
copiaPreciosDirecta[1] = 100;  // Modificamos el segundo elemento de la copia directa

copiaNotasSlice[1] = 10;  // Modificamos el segundo elemento de la copia slice
copiaPreciosSlice[2] = 99.99;  // Modificamos el tercer elemento de la copia slice


// Mostramos el resultado
console.log("Notas original:", notas);
console.log("Copia notas directa (referencia):", copiaNotasDirecta);
console.log("Copia notas slice (independiente):", copiaNotasSlice);

console.log("Precios original:", precios);
console.log("Copia precios directa (referencia):", copiaPreciosDirecta);
console.log("Copia precios slice (independiente):", copiaPreciosSlice);