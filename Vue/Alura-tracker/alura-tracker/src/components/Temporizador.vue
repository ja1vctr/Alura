<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">

        <Cronometro :tempoEmSegundos="tempoEmSegundos" />

        <button class="button" @click="iniciar" :disabled="cronometroAtividade">
            <span class="icon">
                <i class="fas fa-play"></i>
            </span>
            <span>play</span>
        </button>
        <button class="button" @click="finalizar" :disabled="!cronometroAtividade">
            <span class="icon">
                <i class="fas fa-stop"></i>
            </span>
            <span>stop</span>
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Cronometro from './Cronometro.vue';

export default defineComponent({
    name: "Temporizador-forms",
    emits: ['aoTemporizadorFinalizado'],
    components: {
        Cronometro,
    },
    data() {
        return {
            tempoEmSegundos: 0,
            cronometroReferencia: 0,
            cronometroAtividade: false,
        }
    },

    methods: {
        iniciar() {
            // iniciar a contagem
            // 1s = 1000 ms
            this.cronometroAtividade = true
            this.cronometroReferencia = setInterval(() => {
                this.tempoEmSegundos = this.tempoEmSegundos + 1;
            }, 1000)
            console.log("iniciando");
        },

        finalizar() {
            //finalizar a contagem
            this.cronometroAtividade = false
            clearInterval(this.cronometroReferencia)
            this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos)
            this.tempoEmSegundos = 0

        },
    }
});
</script>

<style></style>