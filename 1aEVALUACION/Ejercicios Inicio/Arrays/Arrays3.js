/* LENGTH  SHORT()

Actualiza la función del segundo punto del ejercicio 2 para que, tras realizar todos los 
cambios pedidos en el mismo, se ordene el array original resultante según el número de 
caracteres que tenga cada valor, de mayor a menor.   */


// 5.2. Ordenar el array original por número de caracteres de mayor a menor
    herramientas.sort(function(a, b) {
        return b.length - a.length; // Ordena de mayor a menor
    });

    console.log("Array original ordenado por número de caracteres:", herramientas);


/*Utilizamos sort() con una función de comparación que resta la longitud de a 
de la longitud de b. 
Esto garantiza que el array se ordene de mayor a menor, según el número de caracteres.*/
