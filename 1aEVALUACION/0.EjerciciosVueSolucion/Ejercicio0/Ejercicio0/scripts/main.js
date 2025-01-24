const app = Vue.createApp({
  data() {
    return {
      nombre: "Luke",
      apellidos: "Skywalker",
      edad: 20,
      imagen:
        "https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2019/04/18/156382.jpg",
      textoImagen: "Foto de Luke Skywalker",
      estilos: false,
      enlaces: [
        { url: "https://www.starwars.com/", texto: "Enlace 1" },
        { url: "https://starwars.fandom.com/es/wiki/Databank_(sitio_web)", texto: "Enlace 2" },
        { url: "https://www.lafosadelrancor.com/", texto: "Enlace 3" }
      ]
    };
  },
  methods: {
    multiplicarEdad(edad, factor) {
      return edad * factor;
    },

    generarRandom() {
      return Math.random();
    },
  },
});
