<template>
    <h1>Modificar Generico</h1>
    <div v-for="atr in datos" :key="atr">
        <label>{{ atr.label }}</label>
        <input type="text" v-model="estudiante[atr.key]">
    </div>
    <button type="submit" class="btn-primary">Actualizar</button>
    <router-link to="/listar" class="btn-primary">Cancelar</router-link>
</template>

<script>
export default {
    name: 'ModificarGenerico',
    props: {
        estudiante: Object,
        datos: Array
    }
}
</script>

<style scoped>
.form-group {
    margin-bottom: 1rem;
}

label {
    display: block;
    margin-bottom: 0.5rem;
}

input {
    width: 100%;
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid #ccc;
}

.btn-primary {
    background-color: hsla(160, 100%, 37%, 1);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 500;
    transition: background-color 0.2s;
}

.btn-primary:hover {
    background-color: hsla(160, 100%, 32%, 1);
}
</style>