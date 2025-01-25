<template>
  <div>
    <h2>Grupos {{ formados ? "Formados" : "No Formados" }}</h2>
    <table>
      <thead>
        <tr>
          <th>Grupo</th>
          <th>Día</th>
          <th>Franja</th>
          <th v-if="formados">Participantes</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(grupo, index) in grupos" :key="index">
          <td>{{ grupo.id }}</td>
          <td>{{ grupo.dia }}</td>
          <td>{{ grupo.franja }}</td>
          <td v-if="formados">{{ grupo.participantes.join(", ") }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["grupos", "formados"],
};
</script>

<style>

</style>
