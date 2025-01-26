<template>
  <div>
    <table>
      <tr>
        <th>Lunes</th>
        <th>Martes</th>
        <th>Miércoles</th>
        <th>Jueves</th>
        <th>Viernes</th>
        <th>Sábado</th>
        <th>Domingo</th>
      </tr>
      <tr v-for="(semana, indexS) in 4" :key="indexS">
        <td
          v-for="(dia, indexD) in 7"
          :key="indexD"
          :class="asignarClase(dia + 7 * indexS)"
          @click="mostrarCita(dia + 7 * indexS)"
        >
          {{ dia + 7 * indexS }}
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: "Calendario",
  props: ["citasCalendario"],
  emits: ["mostrarTextoCita"],
  data() {
    return {
      diaSeleccionado: -1,
    };
  },
  methods: {
    asignarClase(diaAComprobar) {
      let clasesAAsignar = this.diasConClases[diaAComprobar];
      if (diaAComprobar == this.diaSeleccionado) {
        clasesAAsignar += " fondoVerde";
      }
      return  clasesAAsignar;
    },
    mostrarCita(diaCita) {
      this.$emit("mostrarTextoCita", diaCita);
      this.diaSeleccionado = diaCita;
    },
  },
  computed: {
    diasConClases() {
      let clases = {};
      for (let dia = 1; dia <= 28; dia++) {
        const diaEncontrado = this.citasCalendario.find((item) => item.dia === dia);
        clases[dia] = diaEncontrado ? "diaConCita" : "";
      }
      return clases;
    }
  }
};
</script>
<style scoped>
div {
  width: 60%;
  float: left;
  overflow: hidden;
}

table {
  width: 100%;
  table-layout: fixed;
    border: 1px solid black;
}

td,
th {
  border: 1px solid black;
  text-align: center;
  height: 50px;
}

.diaConCita {
  color: red;
  font-size: x-large;
}

.fondoVerde {
  background-color: green;
}
</style>
