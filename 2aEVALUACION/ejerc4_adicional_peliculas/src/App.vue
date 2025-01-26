<template>
  <h1> CARTELERA CINES VAN DICK </h1>
  <NuevaPelicula @altaNuevaPelicula="guardarNuevaPelicula"/>
  <VerPeliculas :peliculas="peliculas" @mostrarResenias="mostrarResenias" @actualizarDatosPelicula="actualizarDatosPelicula"/>
  <Resenias v-show="idPeliculaSeleccionada != -1" :tituloPeliculaSeleccionada="tituloPeliculaSeleccionada" :reseniasPorPelicula="reseniasPorPelicula" @nuevaResenia="guardarNuevaResenia"/>
</template>

<script>
import VerPeliculas from "./components/VerPeliculas.vue";
import NuevaPelicula from "./components/NuevaPelicula.vue";
import Resenias from "./components/Resenias.vue";

export default {
  name: "App",
  components: {
    VerPeliculas,
    NuevaPelicula,
    Resenias
  },
  data() {
    return {
      peliculas: [
        {
          id:0,
          titulo: "Interestellar",
          genero: "drama",
          fechaEstreno: "2016-01-01"
        }
      ],
      resenias: [
        {
          id: 0,
          idPelicula: 0,
          resenia: "Gran película que sabe mantener el interés y atención de lespectador durante todo el tiempo"
        }
      ],
      idPeliculaSeleccionada: -1,
      tituloPeliculaSeleccionada: ""
    };
  },
  methods: {
    guardarNuevaPelicula(fechaEstreno, titulo, genero){
      this.peliculas.push({
        id: this.peliculas.length,
        titulo: titulo,
        genero: genero,
        fechaEstreno: fechaEstreno
      });
    },
    mostrarResenias(idPelicula){
      this.idPeliculaSeleccionada = idPelicula;
      this.tituloPeliculaSeleccionada = this.peliculas.find(pelicula => pelicula.id === idPelicula).titulo; 
    },
    guardarNuevaResenia(resenia){
      if(resenia != ""){
        let nuevaResenia = {
          resenia: resenia,
          idPelicula: this.idPeliculaSeleccionada,
          id: this.resenias.length
        }
        this.resenias.push(nuevaResenia);
      } else {
        this.idPeliculaSeleccionada = -1;
        this.tituloPeliculaSeleccionada = "";
      }
    },
    actualizarDatosPelicula(idPelicula, nuevoTitulo, nuevaFecha){
      let pelicula = this.peliculas.find(pelicula => pelicula.id === idPelicula);
      if (nuevoTitulo != "") {
        pelicula.titulo = nuevoTitulo;         
        if( this.idPeliculaSeleccionada === idPelicula){
          this.tituloPeliculaSeleccionada = pelicula.titulo;
        }
      }
      if (nuevaFecha != "")
        pelicula.fechaEstreno = nuevaFecha;
    }
  },
  computed: {
    reseniasPorPelicula() {
      return this.resenias.filter((resenia) => resenia.idPelicula === this.idPeliculaSeleccionada);
    }
  }
};
</script>

<style>
h1,
h2, h3 {
  color:crimson;
  background-color: mistyrose;
  text-align: center;
  padding: 10px;
  border-radius: 2em 2em;
}
</style>
