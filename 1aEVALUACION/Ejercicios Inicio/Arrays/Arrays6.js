/*A partir de un array que contenga 15 notas entre 1 y 10, 
obtén otro en el que solo se incluyan los aprobados.*/
const arrayNotas = [3, 6, 8, 1, 5.5, 9, 2];


function nota(){
     
                                   //(nota => nota >=5); Es mucho +sencillo
    let aprobados = arrayNotas.filter(function (nota) { 
               if (nota >= 5) { 
                   return true; 
               } else { 
                   return false; 
               }   
           })
  console.log(aprobados);




/*Dados los arrays del punto anterior, busca la posición, en ambos, de la nota con 
valor 5.5. Comprueba el valor devuelto en caso de que no exista dicha nota.*/

let posicionEnNotas = notas.findIndex(nota => nota === 5.5);
let posicionEnAprobados = aprobados.findIndex(nota => nota === 5.5);

console.log(posicionEnNotas);
console.log(posicionEnAprobados);



//Dado el array original del primer punto, comprueba si todos son aprobados.


    let todasAprobados = ArrayNotas.every( nota => nota >= 5);
    console.log(todasAprobados);
}
    notas();



/*A partir de un array que contenga 12 palabras, obtén otro en el que solo se 
incluyan las que tengan menos de 6 caracteres.*/ 

const arrayPalabras = ["A", "partir", "de", "un", "array", "que", "contenga",
    "palabras", "obtén", "otro", "en", "el", "que", "solo", "se"];

function palabras(){
  
    let todasMenosDe = arrayPalabras.filter(palabra => palabra.length < 6);

    console.log(todasMenosDe);


// 7. Recuperar el primer elemento cuya última letra sea 'o'

let primeraPalabraConO = palabras.find(palabra => palabra[palabra.length - 1] === 'o');
console.log(primeraPalabraConO);

}
palabras();

// 8. Crear un array con 8 números de teléfono

const telefonos = ["123456789", "987654321", "555555555", "444444444", "111111113", "222222223", "333333333", "888888883"];

// 9. Buscar si alguno de los números termina en 3

function telefono(){

    let algunoTerminaEn3 = telefonos.some(telefono => telefono.endsWith('3'));

console.log(algunoTerminaEn3); // true o false

}
telefono();