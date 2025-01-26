<template>
  <div id="app">
    <h1>Grupos de Ciclismo</h1>

    <Formulario :grupos="grupos" @apuntarse="nuevoParticipante" />

    <TablaGrupos :grupos="gruposFormados" :formados="true" />

    <TablaGrupos :grupos="gruposNoFormados" :formados="false" />
  </div>
</template>

<script>
import Formulario from "./components/Formulario.vue";
import TablaGrupos from "./components/TablaGrupos.vue";

export default {
  components: {
    Formulario,
    TablaGrupos,
  },
  data() {
    return {
      // Como varios componentes (en este caso todos) necesitan los grupos, por eso los declaramos
      // en el componente padre.
      grupos: [
        {
          id: 1,
          dia: "lunes",
          franja: "tarde",
          participantes: ["Juan", "Pedro", "Ana", "Pepe", "Miguel"],
          formado: true,
        },
        {
          id: 2,
          dia: "lunes",
          franja: "noche",
          participantes: ["Juan", "Pedro", "Ana", "Pepe", "Miguel"],
          formado: true,
        },
        {
          id: 3,
          dia: "miércoles",
          franja: "mañana",
          participantes: ["María", "Luis", "Paula"],
          formado: false,
        },
        {
          id: 4,
          dia: "miércoles",
          franja: "tarde",
          participantes: ["María", "Luis", "Paula", "Sandra"],
          formado: false,
        },
      ],
    };
  },
  methods: {
    nuevoParticipante(datos) {
      const grupoExistente = this.grupos.find(
        (g) => g.dia === datos.dia && g.franja === datos.franja
      );
      if (grupoExistente) {
        grupoExistente.participantes.push(datos.nombre);
        if (grupoExistente.participantes.length === 5)
          grupoExistente.formado = true;
      } else {
        this.grupos.push({
          id: this.grupos.length + 1,
          dia: datos.dia,
          franja: datos.franja,
          participantes: [datos.nombre],
          formado: false,
        });
      }
    },
  },
  // Estas computadas filtran los grupos para sacar los que están formados (5 participantes)
  // y los que tienen menos de 5 miembros.
  computed: {
    gruposFormados() {
      return this.grupos.filter((g) => g.formado);
    },
    gruposNoFormados() {
      return this.grupos.filter((g) => !g.formado);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin: 20px;
}

table {
  width: 80%;
  margin: 20px auto;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f4f4f4;
}
</style>
