const app = Vue.createApp({
    data() {
        return {
            nuevoProp: "",
            propositos: [{
                texto: "Hacer deporte",
                hecho: false
            }, 
            {
                texto: "Comer mas sano",
                hecho: false
            }, 
            {
                texto: "Viajar mas",
                hecho: true
            }]
        };
    },
    methods: {

        anadirProposito() {
            if (this.nuevoProp != "") {
                this.propositos.push({ texto: this.nuevoProp, hecho: false });
                this.nuevoProp = "";/*limpia el campo de entrada para q quede vacío*/
            }
        },
        borrarProposito(index) {
            this.propositos.splice(index, 1);/*splice elimina un elemento del array*/
        },
       
        borrarLista() {
            if (confirm('¿Desea borrar toda la lista de propósitos?')) {
                this.propositos = []; /*Se asigna un array vacío a propositos, 
                eliminando todos los elementos existentes.*/ 
            }
        }
    }
});