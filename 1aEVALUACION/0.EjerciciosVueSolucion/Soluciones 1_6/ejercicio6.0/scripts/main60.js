const app = Vue.createApp({
  data() {
    return {
      nuevoLibro: {
        titulo: "",
        autor: "",
        ejemplares: 0,
      },
      libros: [], // Lista de libros en el catálogo
      error: "", // Mensaje de error
    };
  },

  methods: {
    // Método para agregar un nuevo libro al catálogo
    agregarLibro() {
      const { titulo, autor, ejemplares } = this.nuevoLibro;

      // Validación: No permitir campos vacíos ni valores inválidos
      if (!titulo.trim() || !autor.trim() || ejemplares <= 0) {
        this.error = alert(
          "Todos los campos son obligatorios y los ejemplares deben ser mayores a 0."
        );
        return;
      }
      this.error = "";

      // Comprobar si el libro ya existe en el catálogo
      let libroExistente = null;
      for (const libro of this.libros) {
        if (
          libro.titulo.toLowerCase() === titulo.toLowerCase() &&
          libro.autor.toLowerCase() === autor.toLowerCase()
        ) {
          libroExistente = libro;
          break; // Termina la búsqueda al encontrar el primer resultado
        }
      }

      if (libroExistente) {
        // Si el libro ya existe, aumentar los ejemplares
        libroExistente.ejemplares += ejemplares;
        libroExistente.totalRegistrado += ejemplares;
      } else {
        // Si no existe, añadir un nuevo libro
        this.libros.push({
          titulo,
          autor,
          ejemplares,
          totalRegistrado: ejemplares, // Para controlar el máximo
        });
      }

      // Limpiar los campos del formulario
      this.nuevoLibro = { titulo: "", autor: "", ejemplares: null };
    },

    // Método para prestar un libro
    prestarLibro(index) {
      const libro = this.libros[index];
      if (libro.ejemplares > 0) {
        libro.ejemplares -= 1;
      }
    },

    // Método para devolver un libro
    devolverLibro(index) {
      const libro = this.libros[index];
      if (libro.ejemplares < libro.totalRegistrado) {
        libro.ejemplares += 1;
      }
    },
  },

  computed: {
    // Calcular el total de ejemplares disponibles
    totalEjemplares() {
        let total = 0;
        for (let libro of this.libros) {
          total += libro.ejemplares;
        }
        return total;
      },
      
    // Calcular la media de ejemplares por libro
    mediaEjemplares() {
      if (this.libros.length === 0) return 0;
      return (this.totalEjemplares / this.libros.length).toFixed(2);
    },
  },
});
