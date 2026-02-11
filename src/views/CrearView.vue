<template>
    <h1>Crear</h1>
    <Agregar />
</template>

<script>
import Agregar from '../components/Agregar.vue'
export default {
    name: 'Crear',
    components: {
        Agregar
    }
}
</script>

<style scoped>
Agregar {
    margin-top: 20px;
}
</style>