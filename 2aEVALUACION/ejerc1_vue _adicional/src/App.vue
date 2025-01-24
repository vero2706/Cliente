<template>
  <h1>CITAS FEBRERO 2021</h1>
  <Calendario :citasCalendario="citasCalendario" @mostrarTextoCita="mostrarTextoCita"/>
  <TextoCitas :listaCitasDia="listaCitasDia"/>
  <FormularioCitas @nuevaCita="guardarNuevaCita" />
</template>

<script>
import Calendario from "./components/Calendario.vue";
import TextoCitas from "./components/TextoCitas.vue";
import FormularioCitas from "./components/FormularioCitas.vue";

export default {
  name: "App",
  components: {
    Calendario,
    TextoCitas,
    FormularioCitas,
  },
  data() {
    return {
      citasCalendario: [],
      listaCitasDia:[]
    };
  },
  methods: {
    guardarNuevaCita(diaCita, textoCita) {
      let posicionCita = this.citasCalendario.findIndex(elemento => elemento.dia == diaCita);
      if (posicionCita == -1) {
        let nuevoDia = {
          dia: diaCita,
          citas: [textoCita]
        }
        this.citasCalendario.push(nuevoDia);
      } else {
        (this.citasCalendario[posicionCita]).citas.push(textoCita);
      }
    },
    mostrarTextoCita(diaCita){
      this.listaCitasDia = [];
      for (let i = 0; i < this.citasCalendario.length; i++) {
        if (this.citasCalendario[i].dia == diaCita) {
          this.listaCitasDia = this.citasCalendario[i].citas;
        }
      }
    }
  },
};
</script>

<style>
body {
  background-color: #f8f7f4;
}
h1,
h2 {
  text-align: center;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
</style>
