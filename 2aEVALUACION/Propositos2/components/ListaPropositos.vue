<template>
  <div>
    <ul v-if="propositos.length" class="lista">
      <li 
        v-for="(prop, index) in propositos" 
        :key="index" 
        @dblclick="$emit('borrarProposito', index)"
      >
        <input type="checkbox" v-model="prop.hecho" />
        <del v-if="prop.hecho">{{ prop.texto }}</del>
        <span v-else>{{ prop.texto }}</span>
      </li>
    </ul>
    <p v-else>La lista de propósitos está vacía</p>
    <button @click="$emit('borrarTodos')" class="btn-borrar">Borrar todos</button>
  </div>
</template>

<script>
export default {
  name: 'ListaPropositos',
  props: {
    propositos: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.lista {
  margin: 10px 0;
}

li {
  margin: 8px 0;
  display: flex;
  align-items: center;
}

.del {
  color: rgba(0, 0, 0, 0.5);
}

.btn-borrar {
  margin-top: 10px;
  background-color: red;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.btn-borrar:hover {
  background-color: darkred;
}
</style>
