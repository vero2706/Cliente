const app = Vue.createApp({
  data() {
    return {
      nuevaCampania: "",
      claridad: null,
      medio: null,
      percepciones: [],

      valoracionesCampanias: [
        {
          id: "1",
          campania: "Audi A5 Navidad",
          valoraciones: [
            {
              claridad: 1,
              medio: 2,
              percepciones: [1, 3],
            },
            {
              claridad: 3,
              medio: 2,
              percepciones: [1, 2],
            },
          ],
        },
      ],
      campaniaSeleccionada: null,
    };
  },

  methods: {
    valorarCampania() {
      if (!this.medio || this.percepciones.length === 0) {
        alert("Tiene que elegir al menos un medio y una percepción.");
        return;
      }

      const nuevaValoracion = {
        claridad: this.claridad,
        medio: this.medio,
        percepciones: this.percepciones,
      };

      if (this.nuevaCampania) {
        const nuevaId = this.valoracionesCampanias.length + 1;
        this.valoracionesCampanias.push({
          id: nuevaId,
          campania: this.nuevaCampania,
          valoraciones: [nuevaValoracion],
        });
        this.campaniaSeleccionada = nuevaId;
        this.nuevaCampania = "";
      } else {
        const campaña = this.valoracionesCampanias.find(
          (campannia) => campannia.id === this.campaniaSeleccionada
        );
        campaña.valoraciones.push(nuevaValoracion);
      }
      this.claridad = null;
      this.medio = null;
      this.percepciones = [];
      this.campaniaSeleccionada = null;
    },

    calcularMediaClaridad(valoraciones) {
      const totalClaridad = valoraciones.reduce(
        (acc, valoracion) => acc + valoracion.claridad,
        0
      );
      return totalClaridad / valoraciones.length;
    },
    calcularMedioMasSeleccionado(valoraciones) {
      const medios = valoraciones.map((v) => v.medio);
      return medios.filter((medio) => medio === 1).length >
        medios.filter((medio) => medio === 2).length
        ? "Medios Tradicionales"
        : "Medios Online";
    },
    calcularPercepcionMasRepetida(valoraciones) {
      const percepciones = valoraciones.flatMap((v) => v.percepciones);
      const frecuencia = {};
      percepciones.forEach((p) => (frecuencia[p] = (frecuencia[p] || 0) + 1));
      return Object.keys(frecuencia).reduce((a, b) =>
        frecuencia[a] > frecuencia[b] ? a : b
      );
      return percepcionMasRepetida;
    },
  },
});

app.mount("#app");
