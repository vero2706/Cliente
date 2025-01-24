/* ➢ Modifica el código del ejemplo de tal forma que no se actualice todo el innerHTML de la 
tabla si no que se añada la última fila creada únicamente. De esa forma: 

. El código será óptimo, porque el navegador no tendrá que renderizar toda la 
tabla, solo la nueva fila.  
. No se perderán los listeners de filas ya existentes.  
 */

window.onload = () => {
    document
      .getElementById("tablaDatos")
      .addEventListener(
        "click",
        crearNuevaFila.bind(document.getElementById("tablaDatos")),
        false
      );
  };
  
  function crearNuevaFila() {
    let numFilas = this.childElementCount;
    let nuevaFila = document.createElement("tr");
    nuevaFila.setAttribute("id", numFilas);
    let contenido =
      "<td>" + (numFilas + 1) + "</td><td>" + (numFilas + 2) + "</td>";
    nuevaFila.innerHTML = contenido;
    this.appendChild(nuevaFila);
    document.getElementById(numFilas).addEventListener(
      "click",
      (event) => {
        alert("Id: " + event.currentTarget.id);
      },
      false
    );
  }
  