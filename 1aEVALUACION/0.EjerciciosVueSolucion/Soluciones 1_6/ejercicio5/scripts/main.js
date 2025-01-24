/*El tiempo de trabajo, en principio, será de 45 minutos, mientras que el tiempo de 
descanso será de 10. Estos valores tienen que ser fácilmente modificables en código. */
const MINUTOS_PARA_TRABAJO = 45;
const MINUTOS_PARA_DESCANSO = 10;

const app = Vue.createApp({
  data() {
    return {
      minutos: MINUTOS_PARA_TRABAJO,
      segundos: 0,
      accionARealizar: "trabajar", //2 Opciones: trabajar, descansar
      estadoContador: "parado", //Estados: iniciado, parado, pausado
    };
  },

  /*El comportamiento de los botones será el siguiente: 
  . Cuando se pulse el botón Re/Iniciar, siempre y cuando el contador esté 
parado o pausado, se reiniciará la cuenta de nuevo, empezando por el estado 
Trabajar. Es decir, esté el contador en tiempo de trabajar o de descansar, si se 
Re/Inicia, empezará de nuevo por tiempo de trabajo. Si el contador estuviera 
iniciado, no se realizaría ninguna acción. 
  .  Cuando se pulse el botón pausar, se pausaría la cuenta atrás y, al pulsa 
Re/Iniciar de nuevo, se retomaría la misma donde se hubiera parado. 
  .  Cuando se pulse el botón parar, se reinician los valores de todas las variables, 
quedando el contador preparado para iniciar una nueva cuenta atrás en 
estado trabajar. 
- En todo momento se mostrará el estado del contador, en el texto “Estado del 
contador: “, seguido del valor correspondiente: iniciado, parado o pausado.  */

  methods: {
    iniciar() {
      if (this.estadoContador !== "iniciado") {
        this.estadoContador = "iniciado";
        this.actualizarContador();
        this.interval = setInterval(this.actualizarContador, 1000);
      }
    },

    actualizarContador() {
      if (this.segundos !== 0) {
        this.segundos--;
        return;
      }

      if (this.minutos !== 0) {
        this.minutos--;
        this.segundos = 59;
        return;
      }

      this.accionARealizar =
        this.accionARealizar === "trabajar" ? "descansar" : "trabajar";

      if (this.accionARealizar === "trabajar") {
        this.minutos = MINUTOS_PARA_TRABAJO;
      } else {
        this.minutos = MINUTOS_PARA_DESCANSO;
      }
    },

    pausar() {
      this.estadoContador = "pausado";
      clearInterval(this.interval);
    },

    parar() {
      this.estadoContador = "parado";
      clearInterval(this.interval);
      this.accionARealizar = "trabajar";
      (this.minutos = MINUTOS_PARA_TRABAJO), (this.segundos = 0);
    },
  },
  computed: {
    minutosCalculado() {
      if (this.minutos < 10) {
        return "0" + this.minutos;
      }
      return this.minutos;
    },

    segundosCalculado() {
      if (this.segundos < 10) {
        return "0" + this.segundos;
      }
      return this.segundos;
    },

    verEstadoContador() {
      if (this.estado === "iniciado") return "Iniciado";
      if (this.estado === "pausado") return "Pausado";
      return "Parado";
    },
  },
});
