<template>
    <fieldset>
      <legend>Nuevo tema</legend>
      <form @submit.prevent="guardarTema">
        <label for="nuevoTemaText">Tema</label>
        <input type="text" v-model="nuevoTema" required />
        <input type="submit" value="Guardar" />
      </form>
    </fieldset>
  </template>

<script>
export default {
  data() {
    return {
      nuevoTema: "",
    };
  },
  methods: {
    guardarTema() {
      this.$emit("guardar-tema", this.nuevoTema);
      this.nuevoTema = "";
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
input,select, textarea {
    margin: 3px;
    padding: 2px;
}

fieldset {
    margin-bottom: 15px;
    border-radius: 2em 2em;
    padding-left: 20px;
}

</style>