<template>
  <fieldset>
    <legend>Generar nuevo cuestionario</legend>
    <form @submit.prevent="generarCuestionario">
      <label for="numPreguntas">Nº de preguntas</label>
      <input
        type="number"
        v-model.number="numPreguntas"
        min="1"
        required
      /><br />
      <label for="temas">Temas</label>
      <select v-model="temaSeleccionado">
        <option v-for="tema in temas" :key="tema.id" :value="tema.id">
          {{ tema.nombre }}
        </option>
      </select>
      <input type="submit" value="Generar" />
    </form>
  </fieldset>
</template>

<script>
export default {
  props: ["temas", "preguntas"],
  data() {
    return {
      numPreguntas: 1,
      temaSeleccionado: null,
    };
  },

  methods: {
    generarCuestionario() {
      const preguntasFiltradas = this.preguntas.filter(
        (p) => p.temaId === this.temaSeleccionado
      );
      this.$emit(
        "mostrar-cuestionario",
        preguntasFiltradas.slice(0, this.numPreguntas)
      );
    },
  },
};
</script>

<style scoped>
#formularios {
  float: left;
  width: 40%;
  border-right: 2px dashed gold;
  box-sizing: content-box;
  padding: 5px;
}

#cuestionario {
  float: right;
  width: 45%;
  margin-left: 2%;
  padding-left: 10%;
  border-left: 2px dashed gold;
  box-sizing: content-box;
}

input,
select,
textarea {
  margin: 3px;
  padding: 2px;
}

fieldset {
  margin-bottom: 15px;
  border-radius: 2em 2em;
  padding-left: 20px;
}
</style>
