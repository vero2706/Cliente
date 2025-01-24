<template>
  <input v-model="nuevoProp" />
  <button @click="anadirProposito">Añadir</button>
  <br />
</template>

<script>
export default {
  name: "Acciones",
  props: ["propositos"],
  data() {
    return {
      nuevoProp: "",
    };
  },
  methods: {
    anadirProposito() {
      if (this.nuevoProp != "") {
        this.propositos.push({ texto: this.nuevoProp, hecho: false });
        this.nuevoProp = "";
      }
    },
  },
};
</script>
