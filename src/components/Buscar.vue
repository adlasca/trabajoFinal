<template>
    <h1>Buscar</h1>
    <form action="">
        <input type="text" placeholder="Buscar">
        <button type="submit">Buscar</button>
    </form>
</template>


<script>
export default {
    name: 'Buscar'
}
</script>
<style scoped>
form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

input {
    margin: 10px;
}

button {
    margin: 10px;
}
</style>