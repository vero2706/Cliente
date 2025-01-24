<template>
   <h2 :class="estilosEncabezado">Propósitos de año nuevo:</h2>
    <ul v-if="propositos.length">
        <li v-for="(prop, index) in propositos" :class="prop.hecho ? 'estilo1' : 'estilo2'"
            @dblclick="borrarProposito(index)">
            <label>
                <input type="checkbox" v-model="prop.hecho" @change="actualizarEstilosEncabezado()">

                <del v-if="prop.hecho">
                    {{ prop.texto }}
                </del>
                <span v-else>
                    {{ prop.texto }}
                </span>
            </label>
        </li>
    </ul>
    <p v-else>
        La lista de propósitos está vacía
    </p>
</template>


<script>
export default {
    name: "Lista",
    props: ["propositos"],
    data() {
        return {
            estilosEncabezado: ""
        }
    },
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
            } else if (propositosCumplidos > 3) {
                this.estilosEncabezado = "estilo3";
            } else {
                this.estilosEncabezado = "";
            }
        },
        borrarProposito(index) {
            this.propositos.splice(index, 1);
        },
    },
    computed: {
        actualizarEstiloEncabezado() {
            let propositosCumplidos = 0;
            for (let index = 0; index < this.propositos.length; index++) {
                if (this.propositos[index].hecho) {
                    propositosCumplidos++;
                }
            }

            return propositosCumplidos > 5 ? "estilo4" : (propositosCumplidos > 3 ? "estilo3" : "");

        }
    }
}
</script>


<style>
#app {
    padding: 20px;
  }
  
  li {
    margin: 8px 0;
  }
  
  h2 {
    font-weight: bold;
    margin-bottom: 15px;
  }

.estilo1 {
  color: green;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-align: right;
} 

.estilo2 {
  color: red;
  font-family: fantasy;
  list-style-type: square;
}

.estilo3 {
  color: yellow;
  background-color: black;
  text-align: center;
}

.estilo4 {
  color: fuchsia;
  background-color: darkgreen;
  text-align: center;
}
</style>
