const app = Vue.createApp({
  data() {
    return {
      libros: [
        {
          id: 1,
          titulo: "El señor de los anillos",
          autor: "J.R.R. Tolkien",
          genero: "Fantasía",
          ejemplares: 3,
          totalEjemplares: 3,
        },
        {
          id: 2,
          titulo: "1984",
          autor: "George Orwell",
          genero: "Ciencia Ficción",
          ejemplares: 5,
          totalEjemplares: 5,
        },
        {
          id: 3,
          titulo: "Cien años de soledad",
          autor: "Gabriel García Márquez",
          genero: "Realismo mágico",
          ejemplares: 2,
          totalEjemplares: 2,
        },
        {
          id: 4,
          titulo: "Harry Potter y la piedra filosofal",
          autor: "J.K. Rowling",
          genero: "Fantasía",
          ejemplares: 1,
          totalEjemplares: 1,
        },
        {
          id: 5,
          titulo: "To Kill a Mockingbird",
          autor: "Harper Lee",
          genero: "Ficción",
          ejemplares: 4,
          totalEjemplares: 4,
        },
      ],
      nuevoLibro: {
        titulo: "",
        autor: "",
        genero: "",
        ejemplares: 0,
        totalEjemplares: 0,
      },
    };
  },
  methods: {
    agregarLibro() {
      const existeLibro = this.libros.find(
        (libro) =>
          libro.titulo.toLowerCase() === this.nuevoLibro.titulo.toLowerCase() &&
          libro.autor.toLowerCase() === this.nuevoLibro.autor.toLowerCase()
      );

      if (existeLibro) {
        existeLibro.ejemplares += this.nuevoLibro.ejemplares;
      } else {
        const nuevoId = this.libros.length + 1;
        this.nuevoLibro.totalEjemplares = this.nuevoLibro.ejemplares;
        this.libros.push({ id: nuevoId, ...this.nuevoLibro });
      }

      this.nuevoLibro = {
        titulo: "",
        autor: "",
        genero: "",
        ejemplares: 0,
        totalEjemplares: 0,
      };
    },
    prestarLibro(libro) {
      if (libro.ejemplares > 0) {
        libro.ejemplares--;
      }
    },
    devolverLibro(libro) {
      if (libro.ejemplares < libro.totalEjemplares) {
        libro.ejemplares++;
      }
    }
  },
  computed: {
    totalLibros() {
      return this.libros.reduce((total, libro) => total + libro.ejemplares, 0);
    },
    promedioEjemplares() {
      const cantidadLibros = this.libros.length;
      if (cantidadLibros === 0) return 0;

      const totalEjemplares = this.libros.reduce(
        (total, libro) => total + libro.ejemplares,
        0
      );
      return (totalEjemplares / cantidadLibros).toFixed(0);
    },
  },
});
