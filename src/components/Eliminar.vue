<template>
    <h1>Eliminar</h1>
</template>

<script>
export default {
    name: 'Eliminar',
    data() {
        return {
            estudiantes: [
                {
                    id: 1,
                    nombre: 'Juan',
                    apellido: 'Perez',
                    edad: 25,
                    genero: 'Masculino'
                },
                {
                    id: 2,
                    nombre: 'Maria',
                    apellido: 'Gomez',
                    edad: 22,
                    genero: 'Femenino'
                }
            ]
        }
    },
    methods: {
        eliminar(id) {
            this.estudiantes = this.estudiantes.filter(estudiante => estudiante.id !== id)
        }
    }
}
</script>

<style scoped></style>