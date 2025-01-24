/*➢ Captura el evento de envío de formulario y comprueba: 

. Que todos los campos tienen valor o están seleccionados, menos los checkbox 
que puede no haberse seleccionado ninguno. 

. En caso de que no lo estén, se avisará mediante un alert de los que faltan y no 
se seguirá con el envío del formulario. 

. En caso de que estén completo se mostrarán en un alert el valor de cada uno 
de ellos (para los checkbox y radiobutton solo de los seleccionados).  */

document.getElementById("miFormulario").addEventListener("submit", function (event) {
    event.preventDefault();

    // Validar campos obligatorios
    const nombre = document.getElementById("nombre").value.trim();
    const prepagoSeleccionado = document.querySelector('input[name="prepago"]:checked');
    const compania = document.getElementById("compania").value;
    const observaciones = document.getElementById("observaciones").value.trim();

    // Variable para almacenar mensaje de error
    let mensajeError = "";

    // Verificar si el campo de nombre está vacío
    if (nombre === "") {
      mensajeError += "El campo 'Nombre' es obligatorio.\n";
    }

    // Verificar si se seleccionó una opción para prepago
    if (!prepagoSeleccionado) {
      mensajeError += "Debe seleccionar si es prepago o no.\n";
    }

    // Verificar si se seleccionó una compañía
    if (compania === "") {
      mensajeError += "Debe seleccionar una compañía telefónica.\n";
    }

    // Verificar si el área de observaciones no está vacía
    if (observaciones === "") {
      mensajeError += "El campo 'Observaciones' es obligatorio.\n";
    }

    // Mostrar mensajes de error o enviar el formulario
    if (mensajeError) {
      alert(mensajeError);
    } else {
      // Si no hay errores, se envía el formulario
      alert("Formulario enviado con éxito.");
      document.getElementById("miFormulario").submit();
    }
  });

  /*<script>
        // Limitar el tamaño del área de texto a 140 caracteres
        function limitarCaracteres(maxCaracteres) {
            var observaciones = document.getElementById("observaciones");
            if (observaciones.value.length >= maxCaracteres) {
                return false;
            }
            return true;
        }

        // Captura el evento submit para validar antes de enviar
        document.getElementById('miFormulario').addEventListener('submit', function(event) {
            event.preventDefault(); // Evita el envío automático del formulario

            // Referencia al formulario y sus elementos
            let formulario = document.forms["formularioHorario"];
            let nombreUsuario = formulario["nombreUsuario"].value.trim();
            let companiaSeleccionada = formulario["compania"].value;
            let observaciones = formulario["observaciones"].value.trim();

            // Verificar si se seleccionó algún radio para prepago
            let prepagoSeleccionado = formulario["prepago"];
            let prepagoValido = false;
            for (let i = 0; i < prepagoSeleccionado.length; i++) {
                if (prepagoSeleccionado[i].checked) {
                    prepagoValido = true;
                    break;
                }
            }

            // Mensaje de error acumulativo
            let mensajeError = "";

            // Validaciones
            if (!nombreUsuario) {
                mensajeError += "El campo 'Nombre' es obligatorio.\n";
                formulario["nombreUsuario"].focus();
            }
            if (!prepagoValido) {
                mensajeError += "Debe seleccionar si es prepago o no.\n";
            }
            if (!companiaSeleccionada) {
                mensajeError += "Debe seleccionar una compañía telefónica.\n";
                formulario["compania"].focus();
            }
            if (!observaciones) {
                mensajeError += "El campo 'Observaciones' es obligatorio.\n";
                formulario["observaciones"].focus();
            }

            // Mostrar errores o enviar formulario
            if (mensajeError) {
                alert(mensajeError);
            } else {
                alert("Formulario enviado con éxito.");
                formulario.submit();
            }
        });
    </script>
*/
/*En caso de que no lo estén, se avisará mediante un alert de los que faltan y no 
se seguirá con el envío del formulario.*/

 if (mensajeError) {
  alert("Por favor, complete los siguientes campos:\n\n" + mensajeError);
} else {
  alert("Formulario enviado con éxito.");
  formulario.submit();
}
