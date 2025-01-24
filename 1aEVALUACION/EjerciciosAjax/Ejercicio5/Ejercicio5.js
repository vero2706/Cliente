function verTodos() {
    fetch("http://localhost:3000/animales")
      .then((response) => response.json())
      .then((datosAnimales) => mostrarAnimales(datosAnimales))
      .catch((error) => console.log(error));
  }
  
  function nuevoAnimal() {
    let nuevoAnimal = {
      Tipo: "Gato",
      Nombre: "Pepín",
      Observacion: "Gato persa",
      Ubicacon: "Está en belen",
      Rasgos: "Ojos azules",
      Imagen: "Gato",
    };
  
    let init = {
      method: "POST",
      body: JSON.stringify(nuevoAnimal),
      headers: { "Content-Type": "application/json" },
    };
  
    fetch("http://localhost:3000/animales", init)
      .then((response) => {
        if (response.ok && response.status == 201)
          alert("Animal dado de alta con éxito");
      })
      .catch((error) => console.log(error));
  }
  
  function mostrarAnimales(datosAnimales) {
    datosAnimales.forEach((element) => {
      let parrafo = document.createElement("p");
      parrafo.innerText = element.Nombre;
      document.body.appendChild(parrafo);
    });
  }