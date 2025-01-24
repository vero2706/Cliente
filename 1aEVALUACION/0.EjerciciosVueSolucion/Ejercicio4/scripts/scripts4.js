const app = Vue.createApp({
    data() {
        return {
            nuevoProp: "",
            propositos: [{
                texto: "Hacer deporte",
                hecho: false
            }, {
                texto: "Comer mas sano",
                hecho: false
            }, {
                texto: "Viajar mas",
                hecho: true
            },{
                texto: "Aprender inglés",
                hecho: false
            },{
                texto: "Leer más",
                hecho: false
            }],
            estilosEncabezado: ""
        };
    },

/*➢ Al título inicial se le aplicarán los siguientes estilos:  
o Cuando haya más de 3 propósitos cumplidos en la lista, estilo3.  
o Cuando hay mas de 5 propósitos cumplidos en la lista, estilo4.  
o En cualquier otro caso, ningún estilo.*/ 
    methods: {
        actualizarEstilosEncabezado() {
            let propositosCumplidos = 0;
            for (let index = 0; index < this.propositos.length; index++) {
                if (this.propositos[index].hecho) {
                    propositosCumplidos++;
                } 
            }
            if (propositosCumplidos > 5) {
                this.estilosEncabezado = "estilo4";
            } else if (propositosCumplidos > 3){
                this.estilosEncabezado = "estilo3";
            } else {
                this.estilosEncabezado = "";
            }
        },
        borrarProposito(index) {
            this.propositos.splice(index, 1);
        },
        anadirProposito() {
            if (this.nuevoProp != "") {
                this.propositos.push({ texto: this.nuevoProp, hecho: false });
                this.nuevoProp = "";
            }
        },
        borrarPropositos() {
            if (confirm('¿Desea borrar toda la lista de propósitos?')) {
                this.propositos = [];
            }
        }
    },
    computed: {
        actualizarEstiloEncabezado() {
            let propositosCumplidos = 0;
            for (let index = 0; index < this.propositos.length; index++) {
                if (this.propositos[index].hecho) {
                    propositosCumplidos++;
                } 
            }
            
            return propositosCumplidos > 5 ? "estilo4" : (propositosCumplidos >3 ? "estilo3" : "");

        }
    }
});