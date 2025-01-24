const objVue = Vue.createApp({
  data() {
    return {
      lugares: [
        {
          nombre: "París",
          url: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1420&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          contador: 0,
          hover: false,
          nuevoNombre: "",
          nuevaUrl: "",
          contadorManual: 0,
        },
        {
          nombre: "Londres",
          url: "https://plus.unsplash.com/premium_photo-1682056762907-23d08f913805?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          contador: 0,
          hover: false,
          nuevoNombre: "",
          nuevaUrl: "",
          contadorManual: 0,
        },
        {
          nombre: "Nueva York",
          url: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          contador: 0,
          hover: false,
          nuevoNombre: "",
          nuevaUrl: "",
          contadorManual: 0,
        },
        {
          nombre: "Tokio",
          url: "https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          contador: 0,
          hover: false,
          nuevoNombre: "",
          nuevaUrl: "",
          contadorManual: 0,
        },
        {
          nombre: "Sídney",
          url: "https://plus.unsplash.com/premium_photo-1697730221799-f2aa87ab2c5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2lkbmV5fGVufDB8fDB8fHww",
          contador: 0,
          hover: false,
          nuevoNombre: "",
          nuevaUrl: "",
          contadorManual: 0,
        },
        {
          nombre: "Roma",
          url: "https://plus.unsplash.com/premium_photo-1675975706513-9daba0ec12a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9tYXxlbnwwfHwwfHx8MA%3D%3D",
          contador: 0,
          hover: false,
          nuevoNombre: "",
          nuevaUrl: "",
          contadorManual: 0,
        },
      ],
    };
  },
  methods: {
    incrementarContador(index) {
      this.lugares[index].contador++;
    },
    actualizarNombre(index) {
      if (this.lugares[index].nuevoNombre) {
        this.lugares[index].nombre = this.lugares[index].nuevoNombre;
        this.lugares[index].nuevoNombre = "";
      }
    },
    actualizarContadorManual(index) {
      this.lugares[index].contador += this.lugares[index].contadorManual;
      this.lugares[index].contadorManual = 0;
    },
    actualizarUrl(index) {
      if (this.lugares[index].nuevaUrl) {
        this.lugares[index].url = this.lugares[index].nuevaUrl;
        this.lugares[index].contador = 0;
        this.lugares[index].nuevaUrl = "";
      }
    },
  },
});
