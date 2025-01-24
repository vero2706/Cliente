<template>
    <div class="pie">
      <h3>Sitio Web de Sonia Gutiérrez</h3>
      <h4>{{ mensaje }} - {{ telUser }}</h4>
      <h5>{{ dir }}</h5>
    </div>
  </template>
  
  <script>
      export default {
        name: "piePagina",
        props: ["telUser", "dir"],
        data() {
          return {
          mensaje: "Librería especializada",
          };
        }
      };
  </script>
  
  <style>
    h2, h3, h4, h5 {
      text-align: center;
    }
    .pie {
      bottom: 0;
      background-color: aquamarine;
      width: 100%;
    }
  </style>