<template>
  <div id="app">
    <header>
      <h1>Venta de ropa y complementos de segunda mano</h1>
    </header>

    <main>
      <FormAlta @nuevaPrenda="altaPrenda" />
      <TablaEnVenta
        :productosEnVenta="productosEnVenta"
        @guardarPrecio="guardarPrecio"
        @productoVendido="venderProducto"
      />
      <TablaUltimasVentas :productosVendidos="ultimasVentas" />
    </main>
  </div>
</template>

<script>
import FormAlta from "./components/FormAlta.vue";
import TablaEnVenta from "./components/TablaEnVenta.vue";
import TablaUltimasVentas from "./components/TablaUltimasVentas.vue";

export default {
  components: { FormAlta, TablaEnVenta, TablaUltimasVentas },
  data() {
    return {
      productosEnVenta: [],
      ultimasVentas: [],
    };
  },
  methods: {
    altaPrenda(nuevaPrenda) {
      nuevaPrenda.editable = false;
      this.productosEnVenta.push(nuevaPrenda);
    },
    guardarPrecio(producto) {
      const index = this.productosEnVenta.findIndex(p => p.id === producto.id);
      if (index !== -1) {
      this.productosEnVenta[index].precio = producto.precio;
      } else {
      console.error("error");
      }
    },
    venderProducto(index) {
      const productoVendido = this.productosEnVenta.splice(index, 1)[0];
      this.ultimasVentas.unshift(productoVendido);
      if (this.ultimasVentas.length > 6) {
        this.ultimasVentas.pop();
      }
    },
  },
};
</script>

<style>
body {
  text-align: center;
}

h1 {
  color: #8cb2ff;
  font-weight: bolder;
  margin: 20px 0;
}

#app {
  width: 80%;
  background-color: #e6f0ff;
  margin: auto;
  padding: 2%;
}

main {
  overflow: hidden;
  margin: 20px 0;
}
</style>
