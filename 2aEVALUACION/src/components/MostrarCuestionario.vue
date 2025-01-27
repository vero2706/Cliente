<template>
  <section>
    <h2>Cuestionario creado</h2>
    <div v-if="preguntas.length === 0">No hay preguntas.</div>
    <div v-else>
      <div v-for="(pregunta, index) in preguntas" :key="index">
        <p>{{ index + 1 }}. {{ pregunta.enunciado }}</p>
        <div v-for="(opcion, idx) in pregunta.opciones" :key="idx">
          <label>
            <input type="radio" :name="'pregunta' + index" />
            {{ opcion }}
          </label>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["preguntas"],
};
</script>
<style>
input,
select,
textarea {
  margin: 3px;
  padding: 2px;
}
</style>
