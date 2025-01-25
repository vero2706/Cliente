<template>
  <div id="app">
    <h1>Propósitos de año nuevo:</h1>
    <ListaPropositos 
      :propositos="propositos" 
      @borrarProposito="borrarProposito" 
      @borrarTodos="borrarTodos"
    />
    <NuevoProposito 
      v-model="nuevoProp" 
      @anadir="anadirProposito"
    />
  </div>
</template>

<script>
import ListaPropositos from './components/ListaPropositos.vue';
import NuevoProposito from './components/NuevoProposito.vue';

export default {
  name: 'App',
  components: {
    ListaPropositos,
    NuevoProposito
  },
  data() {
    return {
      propositos: [],
      nuevoProp: ''
    };
  },
  methods: {
    anadirProposito() {
      if (this.nuevoProp.trim() !== '') {
        this.propositos.push({ texto: this.nuevoProp, hecho: false });
        this.nuevoProp = '';
      }
    },
    borrarProposito(index) {
      this.propositos.splice(index, 1);
    },
    borrarTodos() {
      if (confirm('¿Estás seguro de que deseas borrar todos los propósitos?')) {
        this.propositos = [];
      }
    }
  }
};
</script>

<style>
#app {
  padding: 20px;
}

h1 {
  font-family: Arial, sans-serif;
  color: #333;
}
</style>
