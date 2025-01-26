<template>
  <div>
    <h3> Reseñas para {{ tituloPeliculaSeleccionada }}</h3>
    <table v-if="reseniasPorPelicula.length > 0">
      <tr>
        <th>Reseñas</th>
      </tr>
      <tr v-for="resenia in reseniasPorPelicula" :key="resenia.id">
        <td>{{resenia.resenia}}</td>
      </tr>
    </table>
    <span v-else> Se el primero en reseñar la película </span>
    <textarea name="resenia" id="resenia" v-model="nuevaResenia" rows="8"></textarea>
    <button type="button" @click="guardarNuevaResenia">Guardar reseña</button>
    <button type="button" @click="ocultarSeccionResenias">Salir</button>
  </div>
</template>
<script>
export default {
  name: "resenias",
  emits: ["nuevaResenia"],
  props: ["tituloPeliculaSeleccionada", "reseniasPorPelicula"],
  data () {
    return {
      nuevaResenia: ""
    };
  },
  methods: {
    guardarNuevaResenia() {
      if(this.nuevaResenia == "") {
        alert("Debe ingresar una reseña");
        return;
      }
      this.$emit("nuevaResenia", this.nuevaResenia);
      this.nuevaResenia = "";
    },
    ocultarSeccionResenias() {
      this.$emit("nuevaResenia", "");
    }
  }
};
</script>
<style scoped>
div {
  border: 2px solid crimson;
  border-radius: 10px;
  box-sizing: border-box;
  width: 49%;
  float: right;
  margin-top: 10px;
  padding: 10px;
  min-height: 45vh;
  overflow: hidden;
}

table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
  padding: 5px;
}

table {
  width: 80%;
  margin: auto;
}

td{
  text-align: justify;
  vertical-align: center;
}

textarea {
  display: block;
  width: 70%;
  margin: 20px auto;
}

button {
  display: block;
  width: 40%;
  margin: 10px auto;
  border-radius: 10px;
  background-color: mistyrose;
}
</style>
