<template>
  <div>
    <h3> Películas Registradas </h3>
    <ul>
      <li v-for="(pelicula,index) in peliculasOrdenadas" :class="pelicula.genero" :key="index">
        <span v-if="!tituloEditable" @dblclick="tituloEditable = true">{{pelicula.titulo}}</span>
        <input v-else type="text" name="titulo" id="titulo" v-model="nuevoTitulo" @keyup.enter="actualizarDatosPelicula(pelicula.id)">
        <ul>
          <li>Genero: {{getGeneros(pelicula.genero)}} </li>
          <li>
            <span v-if="!fechaEditable" @dblclick="fechaEditable = true">Fecha de Estreno: {{ pelicula.fechaEstreno }}</span>
            <input v-else type="date" name="fecha" id="fecha" :min="fechaActual" v-model="nuevaFecha" @keyup.enter="actualizarDatosPelicula(pelicula.id)">
          </li>
          <li> <input type="button" value="Dejar Reseña" @click="mostrarResenia(pelicula.id)"></li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "verPeliculas",
  props: ["peliculas"],
  emits: ["mostrarResenias", "actualizarDatosPelicula"],
  data() {
    return {
      fechaEditable: false,
      tituloEditable: false,
      nuevoTitulo: "",
      nuevaFecha: ""
    };
  },
  methods: {
    mostrarResenia(idPelicula) {
      this.$emit("mostrarResenias", idPelicula);   
    },
    actualizarDatosPelicula (idPelicula) {
      this.$emit("actualizarDatosPelicula", idPelicula, this.nuevoTitulo, this.nuevaFecha);
      this.fechaEditable = false;
      this.tituloEditable = false;
      this.nuevoTitulo = "";
      this.nuevaFecha = "";
    },
    getGeneros(genero) {
      let generos = {
        accion: "Acción",
        comedia: "Comedia",
        drama: "Drama",
        cienciaFiccion: "Ciencia Ficción"
      };
      return generos[genero];
    }
  },
  computed: {
    peliculasOrdenadas() {
      let peliculasOrd = this.peliculas.sort((a, b) => {
        let fecha1 = new Date(a.fechaEstreno);
        let fecha2 = new Date(b.fechaEstreno);
        return fecha1 - fecha2;
      });
      return peliculasOrd;
    },
    fechaActual() {
      let fechaHoy = new Date();
      let anio = fechaHoy.getFullYear();
      let mes = String(fechaHoy.getMonth() + 1).padStart(2, '0');
      let dia = String(fechaHoy.getDate()).padStart(2, '0');
      return `${anio}-${mes}-${dia}`;
    }
  }
};
</script>
<style scoped>
div {
  border: 2px solid crimson;
  border-radius: 10px;
  width: 49%;
  box-sizing: border-box;
  float: left;
  margin-top: 10px;
  overflow: hidden;
  min-height: 45vh;
}

input {
  display: block;
  width: 40%;
  border-radius: 10px;
  background-color: mistyrose;
}

.accion {
  color:red
}

.comedia {
  color:blue;
}

.drama {
  color:green;
}

.cienciaFiccion {
  color:pink
}

</style>
