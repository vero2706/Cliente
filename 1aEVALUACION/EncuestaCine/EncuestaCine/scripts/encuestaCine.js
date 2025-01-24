document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const divErrores = document.getElementById("divErrores");
  const checkboxDiv = document.getElementById("checkboxDiv");
  const labelOfertas = document.getElementById("labelOfertas");

  const eliminarErrores = () => {
    divErrores.innerHTML = "";
  };

  const añadirError = (mensaje) => {
    const errorP = document.createElement("p");
    errorP.textContent = mensaje;
    errorP.style.color = "red";
    divErrores.appendChild(errorP);
  };

  form.addEventListener("submit", (e) => {
    eliminarErrores();
    let SiEsValido = true;

    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const telefono = document.getElementById("telefono");
    const servicios = document.getElementById("servicios");
    const opinion = document.getElementById("textArea");

    if (nombre.value.trim() === "") {
      SiEsValido = false;
      nombre.style.border = "2px solid red";
      añadirError("El campo Nombre es obligatorio");
    } else {
      nombre.style.border = "";
    }
    const emailR = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
      SiEsValido = false;
      email.style.border = "2px solid red";
      añadirError("Email obligatorio");
    } else if (!emailR.test(email.value.trim())) {
      SiEsValido = false;
      email.style.border = "2px solid red";
      añadirError("El Email no está bien");
    } else {
      email.style.border = "";
    }
    if (telefono.value.trim() !== "" && !/^\d{9}$/) {
      SiEsValido = false;
      telefono.style.border = "2px solid red";
      añadirError("Teléfono debe tener 9 dígitos");
    } else {
      telefono.style.border = "";
    }
    if (servicios.value === "Seleccione uno") {
      SiEsValido = false;
      añadirError("tipo de espectador erroneo");
    }
    if (opinion.value.length > 300) {
      SiEsValido = false;
      añadirError("Tiene más de 300 caracteres");
    }
    if (!SiEsValido) {
      e.preventDefault();
    } else {
      alert("Formulario enviado correctamente");
      form.reset();
    }
  });

  checkboxDiv.addEventListener("mouseover", () => {
    labelOfertas.style.color = "blue";
    labelOfertas.style.fontSize = "1.5em";
  });

  checkboxDiv.addEventListener("mouseout", () => {
    labelOfertas.style.color = "";
    labelOfertas.style.fontSize = "";
  });

  document.addEventListener("keyup", (e) => {
    if (e.key.toLowerCase() === "x") {
      alert("No pulses la X por que sí!!");
    }
  });
});
