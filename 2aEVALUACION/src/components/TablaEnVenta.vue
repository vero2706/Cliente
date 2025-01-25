<template>
  <div>
    <p v-if="productosEnVenta.length === 0">
      Enhorabuena, parece que has vendido todas las prendas que has puesto a la venta. ¿Por qué no sigues vendiendo lo que ya no usas?
    </p>
    <table v-else>
      <thead>
        <tr>
          <th>Prenda</th>
          <th>Talla</th>
          <th>Precio</th>
          <th>Acción</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(producto, index) in productosEnVenta" :key="index">
          <td>{{ producto.prenda }}</td>
          <td>{{ producto.talla }}</td>
          <td>
            <input
              type="number"
              :disabled="!producto.editable"
              v-model.number="producto.precio"
            />
          </td>
          <td>
            <button @click="modificarProducto(index)">
              {{ producto.editable ? "Guardar" : "Modificar" }}
            </button>
          </td>
          <td>
            <button @click="venderProducto(index)">Vender</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["productosEnVenta"],
  methods: {
    modificarProducto(index) {
      const producto = this.productosEnVenta[index];
      if (producto.editable) {
        producto.editable = false;
        this.$emit("guardarPrecio", index, producto.precioTemporal);
      } else {
        producto.editable = true;
        producto.precioTemporal = producto.precio;
      }
    },
    venderProducto(index) {
      this.$emit("productoVendido", index);
    },
  },
};
</script>

<style scoped>
table {
    float: right;
    width: 55%;
    background-color: #BFDFFF;
    border-collapse: collapse;
    border: 2px solid #8CB2FF;
    border-radius: 8px;
    margin: 0;
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