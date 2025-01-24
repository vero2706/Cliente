function cargarAnimales() {
    fetch("http://localhost:3000/animales")
      .then((response) => response.json())
      .then((data) => cargarDatosSelect(data))
      .catch((error) => console.error(error));
  }
  // datosAnimales es el data del 2º then
  function cargarDatosSelect(datosAnimales) {
    let selectAnimales = document.getElementById("animales");
  
    for (let i = 0; i < datosAnimales.length; i++) {
      let elementOption = document.createElement("option");
      elementOption.setAttribute("value", datosAnimales[i].Tipo);
      elementOption.innerText = datosAnimales[i].Tipo;
      selectAnimales.appendChild(elementOption);
    }
  }
  
  function recuperarAnimalesPorTipo() {
    let tipo = document.getElementById("animales").value;
  
    fetch("http://localhost:3000/animales?Tipo=" + tipo)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }