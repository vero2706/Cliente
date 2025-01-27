<template>
  <div>
    <slot
      :temas="temas"
      :preguntas="preguntas"
      :agregarTema="agregarTema"
      :agregarPregunta="agregarPregunta"
    ></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      temas: [],
      preguntas: [],
    };
  },
  methods: {
    agregarTema(nuevoTema) {
      if (
        !this.temas.some(
          (t) => t.nombre.toLowerCase() === nuevoTema.toLowerCase()
        )
      ) {
        const id = this.temas.length + 1;

        this.temas.push({ id, nombre: nuevoTema });
      }
    },
    agregarPregunta(temaId, enunciado, opciones, correcta) {
      const tema = this.temas.find((t) => t.id === temaId);

      if (tema) {
        this.preguntas.push({ temaId, enunciado, opciones, correcta });
      }
    },
  },
};
</script>
<style></style>
