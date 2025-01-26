<template>
  <Lista :propositos="propositos" />
  <Acciones :propositos="propositos" />
  <button @click="borrarPropositos">Borrar todos</button>
</template>

<script>
import Acciones from "./components/Acciones.vue";
import Lista from "./components/Lista.vue";

export default {
  name: "App",
  components: {
    Lista,
    Acciones,
  },
  data() {
    return {
      propositos: [
        {
          texto: "Hacer deporte",
          hecho: false,
        },
        {
          texto: "Comer mas sano",
          hecho: false,
        },
        {
          texto: "Viajar mas",
          hecho: true,
        },
        {
          texto: "Aprender inglés",
          hecho: false,
        },
        {
          texto: "Leer más",
          hecho: false,
        },
      ],
    };
  },
  methods: {
    borrarPropositos() {
      if (confirm("¿Desea borrar toda la lista de propósitos?")) {
        this.propositos = [];
      }
    },
  },
};
</script>

<style>
#app {
  padding: 20px;
}

li {
  margin: 8px 0;
}

h2 {
  font-weight: bold;
  margin-bottom: 15px;
}

.estilo1 {
  color: green;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-align: right;
}

.estilo2 {
  color: red;
  font-family: fantasy;
  list-style-type: square;
}

.estilo3 {
  color: yellow;
  background-color: black;
  text-align: center;
}

.estilo4 {
  color: fuchsia;
  background-color: darkgreen;
  text-align: center;
}
</style>
