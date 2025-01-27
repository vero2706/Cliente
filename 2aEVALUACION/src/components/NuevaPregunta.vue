<template>
  <form id="nuevaPregunta">
    <fieldset>
      <legend>Nueva pregunta</legend>
      <label for="tema" class="nuevaPregLabel"> Tema </label>
      <select v-model="temaSeleccionado" id="tema" class="nuevaPreg" required>
        <option v-for="tema in temas" :key="tema.id" :value="tema.id">
          {{ tema.nombre }}
        </option>
      </select>
      <br />
      <label for="pregunta" class="nuevaPregLabel">Enunciado</label>
      <textarea
        v-model="enunciado"
        id="pregunta"
        class="nuevaPreg"
        rows="10"
        required
      ></textarea>
      <br />
      <label v-for="(opcion, index) in opciones" :key="index">
        Opción {{ index + 1 }}
        <input type="text" v-model="opciones[index]" required />
      </label>
      <br />
      <label for="respCorrecta">Respuesta correcta</label>
      <input type="number" id="respCorrecta" min="1" max="4" required />
      <input type="submit" value="Guardar" id="guardarPreg" />
    </fieldset>
  </form>
</template>

<script>
export default {
  props: ["temas"],
  data() {
    return {
      temaSeleccionado: null,
      enunciado: "",
      opciones: ["", "", "", ""],
      correcta: 1,
    };
  },
  methods: {
    guardarPregunta() {
      this.$emit("guardar-pregunta", this.temaSeleccionado, this.enunciado, this.opciones, this.correcta);
      this.enunciado = "";
      this.opciones = ["", "", "", ""];
      this.correcta = 1;
    },
  },
};
</script>
<style>
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

.nuevaPreg {
  width: 60%;
}

.nuevaPregLabel {
  display: block;
  width: 20%;
  float: left;
  font-weight: bold;
  text-align: right;
  margin-right: 5px;
}
</style>
