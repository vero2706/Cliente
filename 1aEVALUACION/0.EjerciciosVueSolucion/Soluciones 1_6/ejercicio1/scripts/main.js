const app = Vue.createApp({
  data() {
    return {
      nombre: "Diego",
      apellidos: "González Serrano",
      direccion: "Alfonso X 17 5ºD",
      telefono: null,
      estadoCivil: "casado",
      productos: [
        {
          id: 1,
          nombre: "Cuenta Nómina",
          saldo: 3597,
          saldoParaAnadir: 0,
          noHaySaldo:false
        },
        {
          id: 2,
          nombre: "Plan de Pensiones",
          saldo: 25432,
          saldoParaAnadir: 0,
          noHaySaldo: false
        },
        {
          id: 3,
          nombre: "Fondo de Inversión",
          saldo: 65198,
          saldoParaAnadir: 0,
          noHaySaldo: false
        },
      ],
    };
  }
});
