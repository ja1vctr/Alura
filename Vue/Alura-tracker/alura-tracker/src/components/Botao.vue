<template>
    <button class="button" @click="clique" :disabled="abilitacao" :text="texto">
        <span class="icon">
            <i :class="icone"></i>
        </span>
        <span>{{ texto }}</span>
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "Botao-forms",
    emits: ['clique'],
    props: {
        abilitacao: {
            type: Boolean,
        },
        texto: {
            type: String,
            required: true
        },
        icone: {
            type: String,
            required: true
        },
    },

    methods: {
        clique(): void {
            this.$emit('clique')
        }
    }
})
</script>

<!-- 
<button class="button" @click="finalizar" :disabled="!cronometroAtividade">
    <span class="icon">
        <i class="fas fa-stop"></i>
    </span>
    <span>stop</span>
</button> -->