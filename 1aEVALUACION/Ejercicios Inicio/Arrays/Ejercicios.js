/* EJERCICIO1:
Comprobar si un número es positivo o negativo.

let num1 = prompt ("introduce un numero");

if(num1 > 0){
    alert("El numero es positivo");
} else if (num < 0){
    alert ("El numero es negativo");
} else {
    alert("No es un número");
}
*/


/* EJERCICIO2: 
Conversor Euros a Dólares.

let euros;
let dolares;

euros = prompt("Introduce cantidad:");
dolares = euros * 1.10;

alert("El equivalente en $ es" + dolares);
*/


/* Ejercicio 3 Cálculo de números primos  
let numero = prompt ("Pon un numero del 1 al 100");

function esPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) return false;
    }
    return true;
}
function calcularPrimos() {
    const numero = document.getElementById('numero').value;
    let resultado = '';
    for (let i = 2; i <= numero; i++) {
        if (esPrimo(i)) {
            resultado += i + ' ';
        }
    }
    document.getElementById('resultado').innerText = 'Números primos: ' + resultado;
}
*/


/*Ejercicio 5 de los apuntes:
function pedirUnColor() {
  let colores = [];
  let contador = 0;
  let color = "";

  while (true) {
    color = prompt("Introduce un color: ");
    contador++;

    if (color == "rojo") {
      break;
    }
    if (color == "verde") {
      continue;
    } else {
      colores.push(color);
    }

    alert(contador + "-- " + colores);
  }
  pedirUnColor();
}
*/


 
