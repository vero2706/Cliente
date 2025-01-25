<template>
  <div id="app">
    <header>
      <h1>...</h1>
    </header>
  </div>
</template>

<script>
import A from "./components/A.vue";
import B from "./components/B.vue";
import Base from "./components/Base.vue";


//MIRAR SUPER BIEN LAS LLAVES Y CIERRES DE METODOS, DATOS...!!!!
export default {
  components: { A, B, Base },
  data() { //Si hay datos que pasar
    return {
      xx: [],
      x: [],
    };
  },
  methods: {
  },
};
</script>

<style>
</style>
