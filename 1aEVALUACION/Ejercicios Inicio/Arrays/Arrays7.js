/* MAP() REDUCE()
EJERCICIO 7:   
➢ A partir de un array que contenga 15 notas entre 1 y 10, obtén la media de la clase.*/ 

//EJEMPLO NOTA MEDIA CON REDUCE:

const notas = [5, 6, 7, 8, 9, 5.5, 6.5, 4, 7.5, 9.5, 10, 8.5, 9, 4.5, 6];

// Usamos reduce para sumar todas las notas y luego dividimos por la longitud del array
function notas(){

    let media = notas.reduce((acum, nota) => acum + nota, 0) / notas.length;

console.log("Media de la clase:", media.toFixed(2));

// ➢ A partir de un array que contenga 15 notas entre 1 y 10, obtén la nota más alta. 
    let notaMasAlta = notas.reduce((max, nota) => (nota > max ? nota : max), notas[0]);

console.log("Nota más alta:", notaMasAlta);

}
notas();

/* ➢ A partir de un array que contenga 12 precios de una lista de la compra, obtén el 
gasto total de la misma.*/ 

const precios = [12.5, 35.8, 7.25, 4.99, 19.99, 6.75, 2.5, 9.99, 14.99, 3.99, 8.75, 22.45];

// Usamos reduce para sumar todos los precios

function compra(){

    let gastoTotal = precios.reduce((total, precio) => total + precio, 0);

console.log("Gasto total:", gastoTotal.toFixed(2));

}
compra();

//suma IVA 10%
let preciosConIVA = precios.map(precio => (precio * 1.10).toFixed(2));
console.log("Precios con IVA incluido:", preciosConIVA);
