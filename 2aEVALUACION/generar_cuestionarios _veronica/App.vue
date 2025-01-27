<template>
  <div id="app">
      <h1>Generador de Test de Películas</h1>
      <CreadorDeTemas v-slot="{ temas, preguntas, agregarTema, agregarPregunta}">
        <GenerarCuestionario
          :temas="temas"
          :preguntas="preguntas"
           @mostrar-cuestionario="cuestionario = $event" />
         <NuevoTema @guardar-tema="agregarTema" />
         <NuevaPregunta :temas= "temas" @guardar-pregunta="agregarPregunta" /> 
         <MostrarCuestionario :preguntas="cuestionario" />
      </CreadorDeTemas>
  </div>
</template>

<script>
import CreadorDeTemas from "./components/CreadorDeTemas.vue";
import GenerarCuestionario from "./components/GenerarCuestionario.vue";
import NuevoTema from "./components/NuevoTema.vue";
import NuevaPregunta from "./components/NuevaPregunta.vue";
import MostrarCuestionario from "./components/MostrarCuestionario.vue";

export default {
  components: {
    CreadorDeTemas,
    GenerarCuestionario,
    NuevoTema,
    NuevaPregunta,
    MostrarCuestionario
  },
  data() {
    return {
      cuestionario: [],
    };
  },
};
</script>

<style>
@import url(//db.onlinewebfonts.com/c/b51d30fb7966b76c8820e214edca3d6b?family=Back+ttf);

header {
    text-align: center;
    font-family: "Back ttf";
    font-size: xx-large;
    color: gold;
}

main {
    display: flex;
}
</style>
