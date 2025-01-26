<template>
  <div>
    <form @submit.prevent="guardarNuevaPelicula">
      <fieldset>
        <legend> Introduzca los datos de la película </legend>
      
    <label for="titulo"> Título </label>
    <input type="text" name="titulo" id="titulo" v-model="titulo" maxlength="25" required/>
    <label for="genero"> Género </label>
    <select id="genero" v-model="genero" required>
      <option value="accion">Acción</option>
      <option value="comedia">Comedia</option>
      <option value="drama">Drama</option>
      <option value="cienciaFiccion">Ciencia ficción</option>
    </select>
    <label for="fechaEstreno">Fecha de estreno</label>
    <input id="fechaEstreno" type="date" v-model="fechaEstreno" required/>
    <button type="submit">Guardar Película</button>
  </fieldset>
  </form>
  </div>
</template>
<script>
export default {
  name: "FormularioCitas",
  emits: ["altaNuevaPelicula"],
  data() {
    return {
      titulo: "",
      genero: "",
      fechaEstreno: "",
    };
  },
  methods: {
    guardarNuevaPelicula() {
        this.$emit("altaNuevaPelicula", this.fechaEstreno, this.titulo, this.genero);
        this.titulo = "";
        this.genero = "";
        this.fechaEstreno= "";
    },
  },
};
</script>
<style scoped>
div {
  clear: both;
  width: 40%;
  margin: auto;
}
fieldset {
  border: 2px solid crimson;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
}

legend {
  color: crimson;
  font-size: 1.2em;
}

input {
  display: inline-block;
  padding: 5px;
  width: 90%;
}

select, input[type="date"] {
  width: 40%;
}
label {
  display: block;
  padding: 5px;
}

button[type="submit"] {
  display: block;
  margin: auto;
  margin-top: 15px;
  width: 40%;
  border-radius: 10px;
  background-color: mistyrose;
}
</style>
