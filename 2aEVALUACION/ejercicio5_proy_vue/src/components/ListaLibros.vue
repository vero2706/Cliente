<template>
    <ol v-if="libros.length > 0">
      <li v-for="(libro, index) in libros" :key="index">
        {{ libro.titulo }}
      </li>
    </ol>
    <hr />
</template>

<script>
    export default {
    name: "ListaLibros",
    props:["libros"]
    }
</script>