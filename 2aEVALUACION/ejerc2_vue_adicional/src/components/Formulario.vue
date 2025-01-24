<template>
  <div>
    <h2>Formulario de Preferencias</h2>
    <form>
      <div>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" v-model="nombre" placeholder="Escribe tu nombre" required />
      </div>

      <div>
        <label for="dia">Día de la semana:</label>
        <select id="dia" v-model="diaSeleccionado" required>
          <option v-for="dia in dias" :value="dia">{{ dia }}</option>
        </select>
      </div>

      <div>
        <label for="franja">Franja horaria:</label>
        <select id="franja" v-model="franja" required>
          <option v-for="franja in franjas" :value="franja">
            {{ franja }}
          </option>
        </select>
      </div>

      <button type="button" @click="apuntarse">Apuntarse</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Formulario",
  props: ["grupos"],

  data() {
    return {
      nombre: null,
      dia: null,
      franja: null,
      dias: [
        "lunes",
        "martes",
        "miércoles",
        "jueves",
        "viernes",
        "sábado",
        "domingo",
      ],
      franjasDisponibles: ["mañana", "tarde", "noche"],
      diaSeleccionado: "",
    };
  },
  computed: {
    // Esta computada gestiona las franjas disponibles (las que habrá si no hay grupo, o si el grupo tiene menos
    // de 5 miembros.)
    franjas() {
      // Primero obtenemos los grupos que ya tienen 5 miembros mediante filter. Para ello, buscamos los que el día
      // marcado en el select coincida con el día elegido por cada uno de los grupos en el array de grupos
      // y que además tenga ya 5 miembros. Si cumple ambas condiciones, dicho grupo se añade al array de gruposCompletos.
      let gruposCompletos = this.grupos.filter((grupo) => {
        if (
          grupo.dia === this.diaSeleccionado &&
          grupo.participantes.length === 5
        )
          return true;
        else return false;
      });
      // Ahora debemos sacar un nuevo array con las franjas ya ocupadas. Las franjas ocupadas
      // saldrán de filtrar aquellos grupos que ya están completos.
      let franjasOcupadas = gruposCompletos.map((grupo) => {
        return grupo.franja;
      });
      // Sacamos las franjas que quedan disponibles. Para ello, evaluamos la siguiente condición.
      // Si las franjas ocupadas incluyen determinada franja, devolvemos false, de lo contrario, true.
      return this.franjasDisponibles.filter((franja) => {
        if (franjasOcupadas.includes(franja)) return false;
        else return true;
      });
    },
  },
  methods: {
    //Para apuntar a un nuevo participante, emitimos el evento al elemento padre. Luego vaciamos 
    // los campos del formulario.
    apuntarse() {
      this.$emit("apuntarse", {
        nombre: this.nombre,
        dia: this.diaSeleccionado,
        franja: this.franja,
      });
      this.nombre = null;
      this.dia = null;
      this.franja = null;
    },
  },
};
</script>

<style></style>
