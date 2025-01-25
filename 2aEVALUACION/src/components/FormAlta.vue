<template>
    <form @submit.prevent="agregarPrenda">
      <label for="prenda">Prenda</label>
      <input v-model="prenda" type="text" required />
  
      <label for="color">Color</label>
      <input v-model="color" type="color" required />
  
      <label for="talla">Talla</label>
      <select v-model="talla" required>
        <option value="XS">XS</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </select>
  
      <label for="precio">Precio</label>
      <input v-model.number="precio" type="number" step="0.01" required />
  
      <input type="submit" value="Dar de Alta" />
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        prenda: "",
        color: "",
        talla: "XS",
        precio: null,
      };
    },
    methods: {
      agregarPrenda() {
        if (this.prenda && this.color && this.talla && this.precio !== null) {
          this.$emit("nuevaPrenda", {
            prenda: this.prenda,
            color: this.color,
            talla: this.talla,
            precio: this.precio,
          });
          this.prenda = "";
          this.color = "#000000";
          this.talla = "XS";
          this.precio = null;
        }
      },
    },
  };
  </script>
  <style scoped>
form {
    float: left;
    width: 40%;
    background-color: #BFDFFF;
    border: 2px solid #8CB2FF;
    border-radius: 8px;
    padding: 15px;
    box-sizing: border-box;
    text-align: left;
}

form label {
    display: block;
    margin: 10px 0 5px;
    font-weight: bold;
    color: #333;
}

form input, form select, form input[type="submit"] {
    display: block;
    width: 90%;
    margin: 5px auto;
    padding: 8px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #8CB2FF;
}

form input[type="submit"] {
    background-color: #8CB2FF;
    color: white;
    font-weight: bold;
    width: auto;
    padding: 10px 20px;
}

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
</style>