<template>
    <table>
      <thead>
        <tr>
          <th>Tipo de prenda</th>
          <th>Talla</th>
          <th>Precio de venta</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(producto, index) in productosVendidos" :key="index">
          <td>{{ producto.prenda }}</td>
          <td>{{ producto.talla }}</td>
          <td>{{ producto.precio }}</td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script>
  export default {
    props: ["productosVendidos"],
  };
  </script>
  
  <style scoped>
  table {
    width: 55%;
    background-color: #BFDFFF;
    border-collapse: collapse;
    border: 2px solid #8CB2FF;
    border-radius: 8px;
    margin: 20% auto 0;
    box-sizing: border-box;
}

table th, table td {
    border: 1px solid #8CB2FF;
    padding: 10px;
    text-align: center;
    font-size: 16px;
}

table th {
    background-color: #8CB2FF;
    color: white;
    font-weight: bold;
}

table td {
    background-color: #E6F0FF;
}
button {
    background-color: #8CB2FF;
    border: none;
    color: white;
    padding: 6px 12px;
    border-radius: 4px;
}
.ventas {
    clear: both;
    padding-top: 20px;
}

.ventas table {
    float: none;
    margin: 20px auto;
    width: 70%;
}

.ventas p {
    margin: 10px auto;
    font-size: 16px;
    color: #555;
    font-style: italic;
}
  </style>