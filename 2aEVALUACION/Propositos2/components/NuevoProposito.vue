<template>
    <div class="nuevo-proposito">
      <input 
        v-model="nuevoPropLocal" 
        type="text" 
        placeholder="Escribe un propósito" 
        @keyup.enter="anadir"
      />
      <button @click="anadir">Añadir</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NuevoProposito',
    props: {
      modelValue: String
    },
    data() {
      return {
        nuevoPropLocal: this.modelValue || ''
      };
    },
    methods: {
      anadir() {
        if (this.nuevoPropLocal.trim() !== '') {
          this.$emit('anadir', this.nuevoPropLocal.trim());
          this.nuevoPropLocal = '';
        }
      }
    },
    watch: {
      nuevoPropLocal(newVal) {
        this.$emit('update:modelValue', newVal);
      },
      modelValue(newVal) {
        this.nuevoPropLocal = newVal;
      }
    }
  };
  </script>
  
  <style scoped>
  .nuevo-proposito {
    margin: 20px 0;
  }
  
  input {
    padding: 8px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 8px 12px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #218838;
  }
  </style>
  